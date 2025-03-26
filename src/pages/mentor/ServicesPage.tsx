
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { FileEdit, Plus } from 'lucide-react';

const serviceFormSchema = z.object({
  title: z.string().min(3, {
    message: "Service title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  type: z.enum(['oneOnOne', 'group', 'longTerm', 'digital']),
  price: z.string().refine(value => !isNaN(parseFloat(value)) && parseFloat(value) > 0, {
    message: "Price must be a positive number.",
  }),
  duration: z.string().optional(),
  sessions: z.string().optional(),
  maxParticipants: z.string().optional(),
  deliverables: z.string().optional(),
});

// Mock services data
const existingServices = [
  {
    id: '1',
    title: 'One-on-One Career Coaching',
    description: 'Personalized career guidance session to help you navigate your professional growth.',
    type: 'oneOnOne',
    price: '100',
    duration: '60',
    active: true
  },
  {
    id: '2',
    title: 'Resume Review Workshop',
    description: 'Group workshop to improve your resume and get feedback from peers.',
    type: 'group',
    price: '50',
    duration: '90',
    maxParticipants: '10',
    active: true
  },
  {
    id: '3',
    title: 'Career Transition Package',
    description: 'Three-month program to guide you through a successful career transition.',
    type: 'longTerm',
    price: '500',
    sessions: '12',
    active: false
  }
];

const ServicesPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof serviceFormSchema>>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      title: '',
      description: '',
      type: 'oneOnOne',
      price: '',
      duration: '',
      sessions: '',
      maxParticipants: '',
      deliverables: '',
    },
  });

  function onSubmit(values: z.infer<typeof serviceFormSchema>) {
    toast({
      title: "Service created",
      description: `Successfully created ${values.title}`,
    });
    
    form.reset();
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Services</h2>
        <p className="text-muted-foreground">Create and manage your mentorship services</p>
      </div>
      
      <Tabs defaultValue="existing" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="existing">My Services</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
        </TabsList>
        
        <TabsContent value="existing" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {existingServices.map((service) => (
              <Card key={service.id} className={service.active ? "" : "opacity-70"}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      {!service.active && (
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                          Draft
                        </span>
                      )}
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <FileEdit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-sm mt-1">
                    {service.type === 'oneOnOne' && 'One-on-One Session'}
                    {service.type === 'group' && 'Group Session'}
                    {service.type === 'longTerm' && 'Long Term Mentorship'}
                    {service.type === 'digital' && 'Digital Product'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm line-clamp-2 mb-3">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Price:</span>
                      <span className="ml-1 font-medium">${service.price}</span>
                    </div>
                    {service.duration && (
                      <div>
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="ml-1 font-medium">{service.duration} mins</span>
                      </div>
                    )}
                    {service.sessions && (
                      <div>
                        <span className="text-muted-foreground">Sessions:</span>
                        <span className="ml-1 font-medium">{service.sessions}</span>
                      </div>
                    )}
                    {service.maxParticipants && (
                      <div>
                        <span className="text-muted-foreground">Max participants:</span>
                        <span className="ml-1 font-medium">{service.maxParticipants}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3">
                  <div className="flex justify-between w-full">
                    <Button variant="outline" size="sm">
                      {service.active ? "Unpublish" : "Publish"}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                      Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="border-dashed flex flex-col items-center justify-center p-6 h-full">
              <Button variant="outline" className="h-12 w-12 rounded-full mb-3">
                <Plus className="h-6 w-6" />
              </Button>
              <h3 className="font-medium text-lg mb-1">Add New Service</h3>
              <p className="text-sm text-muted-foreground text-center mb-3">
                Create a new mentorship service to offer your expertise
              </p>
              <Button variant="default" size="sm" onClick={() => document.querySelector('button[value="create"]')?.click()}>
                Create Service
              </Button>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="create" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Service</CardTitle>
              <CardDescription>
                Define the details of your new mentorship service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Career Coaching Session" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="oneOnOne">One-on-One Session</SelectItem>
                              <SelectItem value="group">Group Session</SelectItem>
                              <SelectItem value="longTerm">Long Term Mentorship</SelectItem>
                              <SelectItem value="digital">Digital Product</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price ($)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" step="0.01" placeholder="99.99" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {form.watch('type') === 'oneOnOne' && (
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Duration (minutes)</FormLabel>
                            <FormControl>
                              <Input type="number" min="15" step="15" placeholder="60" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {form.watch('type') === 'group' && (
                      <>
                        <FormField
                          control={form.control}
                          name="duration"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Duration (minutes)</FormLabel>
                              <FormControl>
                                <Input type="number" min="15" step="15" placeholder="60" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="maxParticipants"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Maximum Participants</FormLabel>
                              <FormControl>
                                <Input type="number" min="2" placeholder="10" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                    
                    {form.watch('type') === 'longTerm' && (
                      <FormField
                        control={form.control}
                        name="sessions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Sessions</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" placeholder="12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    {form.watch('type') === 'digital' && (
                      <FormField
                        control={form.control}
                        name="deliverables"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Deliverables</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. PDF, Video, Course" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your service in detail..." 
                            className="min-h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Provide details about what mentees will get from this service
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      Create Service
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServicesPage;
