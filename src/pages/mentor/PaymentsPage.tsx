
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, CreditCard, Download, ArrowUpRight, ArrowDownRight, Calendar, Wallet } from 'lucide-react';

// Mock data for earnings chart
const earningsData = [
  { name: 'Jan', amount: 400 },
  { name: 'Feb', amount: 600 },
  { name: 'Mar', amount: 500 },
  { name: 'Apr', amount: 700 },
  { name: 'May', amount: 1200 },
  { name: 'Jun', amount: 800 },
  { name: 'Jul', amount: 1500 },
  { name: 'Aug', amount: 1800 },
  { name: 'Sep', amount: 2000 },
  { name: 'Oct', amount: 2400 },
  { name: 'Nov', amount: 2100 },
  { name: 'Dec', amount: 2500 },
];

// Mock data for earnings history
const earningsHistory = [
  {
    id: 'TX789012',
    date: 'Nov 15, 2023',
    amount: 150.00,
    description: 'One-on-One Session with Jason Brown',
    status: 'completed',
  },
  {
    id: 'TX789011',
    date: 'Nov 10, 2023',
    amount: 750.00,
    description: '3-month Mentorship Package with Alex Chen',
    status: 'completed',
  },
  {
    id: 'TX789010',
    date: 'Nov 5, 2023',
    amount: 50.00,
    description: 'Group Workshop: Resume Building',
    status: 'completed',
  },
  {
    id: 'TX789009',
    date: 'Oct 28, 2023',
    amount: 150.00,
    description: 'One-on-One Session with Maria Garcia',
    status: 'completed',
  },
  {
    id: 'TX789008',
    date: 'Oct 20, 2023',
    amount: 80.00,
    description: 'Digital Course Purchase: Career Transition Guide',
    status: 'completed',
  },
];

// Mock data for payment history
const payoutHistory = [
  {
    id: 'PO123456',
    date: 'Nov 20, 2023',
    amount: 1200.00,
    method: 'Bank Transfer',
    status: 'completed',
  },
  {
    id: 'PO123455',
    date: 'Oct 15, 2023',
    amount: 950.00,
    method: 'UPI Transfer',
    status: 'completed',
  },
  {
    id: 'PO123454',
    date: 'Sep 18, 2023',
    amount: 800.00,
    method: 'Bank Transfer',
    status: 'completed',
  },
];

const MentorPaymentsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Payments</h2>
        <p className="text-muted-foreground">Track your earnings and manage payouts</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,580.00</div>
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Button variant="outline" size="sm" className="mt-2">
                <Wallet className="mr-2 h-4 w-4" />
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Earnings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$450.00</div>
            <p className="text-xs text-muted-foreground mt-1">Available in 2-3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,350.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 font-medium">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lifetime Earnings</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,780.00</div>
            <p className="text-xs text-muted-foreground mt-1">Since April 2023</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Earnings Overview</CardTitle>
          <CardDescription>Your earnings over the past 12 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={earningsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0066FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Earnings']} />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#0066FF" 
                  fillOpacity={1} 
                  fill="url(#colorAmount)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="earnings" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="earnings">Earnings History</TabsTrigger>
          <TabsTrigger value="payouts">Payout History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="earnings" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Your Earnings</h3>
              <p className="text-sm text-muted-foreground">History of earnings from your mentorship services</p>
            </div>
            <div className="flex gap-2">
              <Input
                className="w-[180px]"
                placeholder="Search earnings..."
              />
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-10 px-4 text-left font-medium">Transaction ID</th>
                      <th className="h-10 px-4 text-left font-medium">Date</th>
                      <th className="h-10 px-4 text-left font-medium">Description</th>
                      <th className="h-10 px-4 text-right font-medium">Amount</th>
                      <th className="h-10 px-4 text-right font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {earningsHistory.map((transaction) => (
                      <tr key={transaction.id} className="border-b">
                        <td className="p-4 align-middle">{transaction.id}</td>
                        <td className="p-4 align-middle">{transaction.date}</td>
                        <td className="p-4 align-middle">
                          <div className="font-medium">{transaction.description}</div>
                        </td>
                        <td className="p-4 align-middle text-right font-medium">${transaction.amount.toFixed(2)}</td>
                        <td className="p-4 align-middle text-right">
                          <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                            {transaction.status === 'completed' ? 'Paid' : 'Pending'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between p-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>5</strong> of <strong>25</strong> transactions
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payouts" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Your Payouts</h3>
              <p className="text-sm text-muted-foreground">History of withdrawals to your bank account</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-10 px-4 text-left font-medium">Payout ID</th>
                      <th className="h-10 px-4 text-left font-medium">Date</th>
                      <th className="h-10 px-4 text-left font-medium">Method</th>
                      <th className="h-10 px-4 text-right font-medium">Amount</th>
                      <th className="h-10 px-4 text-right font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payoutHistory.map((payout) => (
                      <tr key={payout.id} className="border-b">
                        <td className="p-4 align-middle">{payout.id}</td>
                        <td className="p-4 align-middle">{payout.date}</td>
                        <td className="p-4 align-middle">
                          <div className="font-medium">{payout.method}</div>
                        </td>
                        <td className="p-4 align-middle text-right font-medium">${payout.amount.toFixed(2)}</td>
                        <td className="p-4 align-middle text-right">
                          <Badge variant={payout.status === 'completed' ? 'default' : 'secondary'}>
                            {payout.status === 'completed' ? 'Completed' : 'Processing'}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between p-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>3</strong> of <strong>3</strong> payouts
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentorPaymentsPage;
