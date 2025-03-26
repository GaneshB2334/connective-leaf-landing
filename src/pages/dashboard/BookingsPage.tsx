
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const bookings = {
  upcoming: [
    {
      id: 1,
      mentor: {
        name: 'Sarah Johnson',
        avatar: '/placeholder.svg',
        expertise: 'Product Management'
      },
      sessionType: 'One-on-One Call',
      date: 'September 15, 2023',
      time: '10:00 AM - 11:00 AM',
      topic: 'Career Growth Strategy',
      status: 'confirmed',
      notes: 'Prepare questions about transitioning to product management'
    },
    {
      id: 2,
      mentor: {
        name: 'David Chen',
        avatar: '/placeholder.svg',
        expertise: 'UX Design'
      },
      sessionType: 'Group Session',
      date: 'September 18, 2023',
      time: '3:00 PM - 4:30 PM',
      topic: 'Design Thinking Workshop',
      status: 'pending',
      notes: 'Bring portfolio samples for review'
    }
  ],
  past: [
    {
      id: 3,
      mentor: {
        name: 'Emily Rodriguez',
        avatar: '/placeholder.svg',
        expertise: 'Leadership Coach'
      },
      sessionType: 'One-on-One Call',
      date: 'August 28, 2023',
      time: '2:00 PM - 3:00 PM',
      topic: 'Communication Skills',
      status: 'completed',
      notes: 'Focused on public speaking techniques'
    },
    {
      id: 4,
      mentor: {
        name: 'Michael Wong',
        avatar: '/placeholder.svg',
        expertise: 'Software Engineering'
      },
      sessionType: 'One-on-One Call',
      date: 'August 15, 2023',
      time: '11:00 AM - 12:00 PM',
      topic: 'Code Review Best Practices',
      status: 'completed',
      notes: 'Discussed team collaboration strategies'
    }
  ]
};

const BookingsPage = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  
  // Function to display status badge with appropriate color
  const renderStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { label: 'Confirmed', variant: 'default' },
      pending: { label: 'Pending', variant: 'secondary' },
      completed: { label: 'Completed', variant: 'outline' },
      cancelled: { label: 'Cancelled', variant: 'destructive' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };
  
  // Render booking card
  const renderBookingCard = (booking) => (
    <Card key={booking.id} className="mb-4">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex gap-4 items-center">
            <Avatar className="h-12 w-12">
              <AvatarImage src={booking.mentor.avatar} alt={booking.mentor.name} />
              <AvatarFallback>{booking.mentor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">{booking.mentor.name}</h4>
              <p className="text-sm text-muted-foreground">{booking.mentor.expertise}</p>
            </div>
          </div>
          <div className="md:text-right">
            {renderStatusBadge(booking.status)}
          </div>
        </div>
        
        <div className="mt-4 border-t pt-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{booking.date}</p>
                <p className="text-sm text-muted-foreground">{booking.time}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Topic: {booking.topic}</p>
              <p className="text-sm text-muted-foreground">Session: {booking.sessionType}</p>
            </div>
          </div>
          
          {booking.notes && (
            <div className="mt-4 bg-muted p-3 rounded-md">
              <p className="text-sm">
                <span className="font-medium">Notes: </span>
                {booking.notes}
              </p>
            </div>
          )}
          
          {booking.status === 'confirmed' && (
            <div className="mt-4 flex flex-wrap gap-2">
              <Button size="sm">Join Session</Button>
              <Button size="sm" variant="outline">Reschedule</Button>
              <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">Cancel</Button>
            </div>
          )}
          
          {booking.status === 'completed' && (
            <div className="mt-4 flex flex-wrap gap-2">
              <Button size="sm" variant="outline">Leave Feedback</Button>
              <Button size="sm" variant="outline">Book Again</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Bookings</h2>
        <p className="text-muted-foreground">Manage your mentorship sessions</p>
      </div>
      
      <div className="flex justify-between items-center">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Button>Book New Session</Button>
      </div>
      
      <div className="space-y-4">
        {selectedTab === 'upcoming' ? (
          bookings.upcoming.length > 0 ? (
            bookings.upcoming.map(renderBookingCard)
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Calendar className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No Upcoming Sessions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You don't have any upcoming mentorship sessions scheduled.
                </p>
                <Button className="mt-4">Book a Session</Button>
              </CardContent>
            </Card>
          )
        ) : (
          bookings.past.length > 0 ? (
            bookings.past.map(renderBookingCard)
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="rounded-full bg-muted p-3">
                  <Calendar className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No Past Sessions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You haven't completed any mentorship sessions yet.
                </p>
                <Button className="mt-4">Find a Mentor</Button>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
