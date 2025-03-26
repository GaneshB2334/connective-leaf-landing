
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const ProfilePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and how we contact you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/placeholder.svg" alt="@user" />
                    <AvatarFallback className="text-2xl">AM</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
                
                <div className="grid gap-4 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First name" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last name" defaultValue="Mitchell" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email address" defaultValue="alex@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Phone number" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell mentors a bit about yourself"
                  defaultValue="I'm a software developer with 3 years of experience looking to transition into product management. I'm passionate about building user-centered products and looking for guidance on this career change."
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Skills & Interests</Label>
                <div className="flex flex-wrap gap-2">
                  {["Product Management", "UX/UI", "Software Development", "Agile", "Leadership"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill} <button className="ml-1 text-xs">×</button></Badge>
                  ))}
                  <Button variant="outline" size="sm">+ Add</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Preferences</CardTitle>
              <CardDescription>
                Customize your mentorship experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Career Goals</Label>
                <Textarea
                  placeholder="What are your career objectives?"
                  defaultValue="Transition to a product management role in a tech company within 1 year"
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Mentorship Focus Areas</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="careerTransition" className="mt-1" defaultChecked />
                    <div>
                      <Label htmlFor="careerTransition">Career Transition</Label>
                      <p className="text-sm text-muted-foreground">Get help changing career paths</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="skillDevelopment" className="mt-1" defaultChecked />
                    <div>
                      <Label htmlFor="skillDevelopment">Skill Development</Label>
                      <p className="text-sm text-muted-foreground">Learn new skills from experts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="leadership" className="mt-1" />
                    <div>
                      <Label htmlFor="leadership">Leadership</Label>
                      <p className="text-sm text-muted-foreground">Develop leadership abilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="networking" className="mt-1" defaultChecked />
                    <div>
                      <Label htmlFor="networking">Networking</Label>
                      <p className="text-sm text-muted-foreground">Expand your professional network</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Communication Preferences</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="commVideo" name="commPreference" className="form-radio" defaultChecked />
                    <Label htmlFor="commVideo">Video Call</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="commAudio" name="commPreference" className="form-radio" />
                    <Label htmlFor="commAudio">Audio Call</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="commChat" name="commPreference" className="form-radio" />
                    <Label htmlFor="commChat">Text Chat</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="radio" id="commInPerson" name="commPreference" className="form-radio" />
                    <Label htmlFor="commInPerson">In-Person (if available)</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your password and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-4">Two-factor Authentication</h4>
                <div className="flex justify-between items-center p-4 border rounded-md">
                  <div>
                    <div className="font-medium">Authenticator App</div>
                    <div className="text-sm text-muted-foreground">Use an authenticator app to generate one-time codes</div>
                  </div>
                  <Button variant="outline">Setup</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
