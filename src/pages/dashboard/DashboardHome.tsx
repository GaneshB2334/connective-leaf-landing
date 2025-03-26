
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, CreditCard, User, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

const statsCards = [
  {
    title: 'Total Sessions',
    value: '12',
    description: '3 upcoming',
    icon: Calendar,
    color: 'bg-blue-500'
  },
  {
    title: 'Active Mentors',
    value: '3',
    description: 'Currently engaged with',
    icon: User,
    color: 'bg-green-500'
  },
  {
    title: 'Learning Hours',
    value: '24',
    description: 'This month',
    icon: Book,
    color: 'bg-purple-500'
  },
  {
    title: 'Amount Spent',
    value: '$480',
    description: 'Last 30 days',
    icon: CreditCard,
    color: 'bg-orange-500'
  }
];

const upcomingSessions = [
  {
    mentorName: 'Sarah Johnson',
    mentorAvatar: '/placeholder.svg',
    sessionType: 'One-on-One Call',
    date: '2023-09-15',
    time: '10:00 AM - 11:00 AM',
    topic: 'Career Growth Strategy'
  },
  {
    mentorName: 'David Chen',
    mentorAvatar: '/placeholder.svg',
    sessionType: 'Group Session',
    date: '2023-09-18',
    time: '3:00 PM - 4:30 PM',
    topic: 'Leadership Skills'
  }
];

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back, Alex! Here's an overview of your mentorship journey.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <div className={`${card.color} p-2 rounded-full`}>
                <card.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
            <CardDescription>Your scheduled mentorship sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex items-center space-x-4 rounded-lg border p-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={session.mentorAvatar} alt={session.mentorName} />
                    <AvatarFallback>{session.mentorName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{session.mentorName}</p>
                    <p className="text-sm text-muted-foreground">{session.sessionType}</p>
                    <p className="text-xs text-muted-foreground">
                      {session.date} • {session.time}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {session.topic}
                    </span>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-2" variant="outline">View All Sessions</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Track your goals and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">Technical Skills</div>
                  <div className="text-sm text-muted-foreground">75%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">Leadership</div>
                  <div className="text-sm text-muted-foreground">60%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">Communication</div>
                  <div className="text-sm text-muted-foreground">90%</div>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4 mt-4">
                <div className="font-medium">Your next milestone</div>
                <div className="mt-1 text-sm text-muted-foreground">Complete 5 more sessions to unlock advanced mentorship opportunities</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
