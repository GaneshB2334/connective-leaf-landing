
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Banknote, BanknoteIcon, CreditCard, PlusCircle, Smartphone } from 'lucide-react';

const profileSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
});

const bankSchema = z.object({
  accountType: z.enum(["savings", "current"]),
  accountName: z.string().min(2, {
    message: "Account name must be at least 2 characters.",
  }),
  accountNumber: z.string().min(9, {
    message: "Account number must be at least 9 digits.",
  }),
  bankName: z.string().min(2, {
    message: "Bank name is required.",
  }),
  ifscCode: z.string().min(11, {
    message: "Please enter a valid IFSC code.",
  }),
});

const upiSchema = z.object({
  upiId: z.string().min(5, {
    message: "Please enter a valid UPI ID.",
  }),
});

const WalletPage = () => {
  const { toast } = useToast();
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);

  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const bankForm = useForm<z.infer<typeof bankSchema>>({
    resolver: zodResolver(bankSchema),
    defaultValues: {
      accountType: "savings",
      accountName: "",
      accountNumber: "",
      bankName: "",
      ifscCode: "",
    },
  });

  const upiForm = useForm<z.infer<typeof upiSchema>>({
    resolver: zodResolver(upiSchema),
    defaultValues: {
      upiId: "",
    },
  });

  function onProfileSubmit(values: z.infer<typeof profileSchema>) {
    toast({
      title: "Profile updated",
      description: "Your payment profile has been successfully updated.",
    });
    setProfileCompleted(true);
  }

  function onBankSubmit(values: z.infer<typeof bankSchema>) {
    toast({
      title: "Bank account added",
      description: "Your bank account has been successfully added.",
    });
    setActivePaymentMethod("bank");
  }

  function onUpiSubmit(values: z.infer<typeof upiSchema>) {
    toast({
      title: "UPI ID added",
      description: "Your UPI ID has been successfully added.",
    });
    setActivePaymentMethod("upi");
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Wallet</h2>
        <p className="text-muted-foreground">Manage your payout methods and withdraw funds</p>
      </div>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Profile</CardTitle>
            <CardDescription>
              Set up your personal information for payments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...profileForm}>
              <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={profileForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} disabled={profileCompleted} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} disabled={profileCompleted} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={profileForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 234 567 8900" {...field} disabled={profileCompleted} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {!profileCompleted && (
                  <Button type="submit">Save Profile</Button>
                )}
                
                {profileCompleted && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-green-600 font-medium">
                      ✓ Profile information saved
                    </p>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setProfileCompleted(false)}
                    >
                      Edit
                    </Button>
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {profileCompleted && (
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Add a payment method to receive payouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="bank" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="bank">Bank Account</TabsTrigger>
                  <TabsTrigger value="upi">UPI</TabsTrigger>
                </TabsList>
                
                <TabsContent value="bank" className="space-y-4 mt-6">
                  <Form {...bankForm}>
                    <form onSubmit={bankForm.handleSubmit(onBankSubmit)} className="space-y-6">
                      <FormField
                        control={bankForm.control}
                        name="accountType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Account Type</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="savings" id="savings" />
                                  <label htmlFor="savings" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Savings Account
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="current" id="current" />
                                  <label htmlFor="current" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Current Account
                                  </label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={bankForm.control}
                          name="accountName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Account Holder Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={bankForm.control}
                          name="accountNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Account Number</FormLabel>
                              <FormControl>
                                <Input placeholder="XXXXXXXXXXXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={bankForm.control}
                          name="bankName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bank Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Bank of America" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={bankForm.control}
                          name="ifscCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>IFSC Code</FormLabel>
                              <FormControl>
                                <Input placeholder="ABCD0123456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button type="submit">
                        <Banknote className="mr-2 h-4 w-4" />
                        Add Bank Account
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                
                <TabsContent value="upi" className="space-y-4 mt-6">
                  <Form {...upiForm}>
                    <form onSubmit={upiForm.handleSubmit(onUpiSubmit)} className="space-y-6">
                      <FormField
                        control={upiForm.control}
                        name="upiId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>UPI ID</FormLabel>
                            <FormControl>
                              <Input placeholder="name@upi" {...field} />
                            </FormControl>
                            <FormDescription>
                              Enter your UPI ID in the format username@bankname
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Add UPI ID
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
        
        {activePaymentMethod && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Active Payment Method</CardTitle>
                <Button variant="outline" size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Another
                </Button>
              </div>
              <CardDescription>
                Your current payout method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                {activePaymentMethod === 'bank' ? (
                  <>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BanknoteIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Bank Account</h3>
                      <p className="text-sm text-muted-foreground">
                        {bankForm.getValues('bankName')} •••• {bankForm.getValues('accountNumber').slice(-4)}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">UPI ID</h3>
                      <p className="text-sm text-muted-foreground">
                        {upiForm.getValues('upiId')}
                      </p>
                    </div>
                  </>
                )}
                <div className="ml-auto">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Withdraw Available Balance
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WalletPage;
