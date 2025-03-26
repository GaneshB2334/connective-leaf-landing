
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CreditCard, Download, Plus } from 'lucide-react';

const transactions = [
  {
    id: 'TX12345',
    date: 'Sep 10, 2023',
    amount: '$120.00',
    description: 'One-on-One Session with Sarah Johnson',
    status: 'completed',
    paymentMethod: 'Visa •••• 4242'
  },
  {
    id: 'TX12344',
    date: 'Sep 5, 2023',
    amount: '$80.00',
    description: 'Group Workshop with David Chen',
    status: 'completed',
    paymentMethod: 'Mastercard •••• 5555'
  },
  {
    id: 'TX12343',
    date: 'Aug 28, 2023',
    amount: '$200.00',
    description: 'Monthly Mentorship Subscription',
    status: 'completed',
    paymentMethod: 'Visa •••• 4242'
  },
  {
    id: 'TX12342',
    date: 'Aug 15, 2023',
    amount: '$75.00',
    description: 'Digital Course: Leadership Essentials',
    status: 'completed',
    paymentMethod: 'PayPal'
  }
];

const paymentMethods = [
  {
    id: 'card1',
    type: 'Visa',
    last4: '4242',
    expiry: '04/25',
    isDefault: true
  },
  {
    id: 'card2',
    type: 'Mastercard',
    last4: '5555',
    expiry: '08/24',
    isDefault: false
  }
];

const PaymentsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Payments</h2>
        <p className="text-muted-foreground">Manage your payment methods and view transaction history</p>
      </div>
      
      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="history">Transaction History</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Your Transactions</h3>
              <p className="text-sm text-muted-foreground">View and download your payment receipts</p>
            </div>
            <div className="flex gap-2">
              <Input
                className="w-[180px]"
                placeholder="Search transactions..."
              />
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
                      <th className="h-10 px-4 text-right font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b">
                        <td className="p-4 align-middle">{transaction.id}</td>
                        <td className="p-4 align-middle">{transaction.date}</td>
                        <td className="p-4 align-middle">
                          <div>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-xs text-muted-foreground">{transaction.paymentMethod}</div>
                          </div>
                        </td>
                        <td className="p-4 align-middle text-right font-medium">{transaction.amount}</td>
                        <td className="p-4 align-middle text-right">
                          <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                            {transaction.status === 'completed' ? 'Paid' : 'Pending'}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between p-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>4</strong> of <strong>4</strong> transactions
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
        
        <TabsContent value="methods" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Payment Methods</h3>
              <p className="text-sm text-muted-foreground">Manage your cards and other payment methods</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Payment Method</DialogTitle>
                  <DialogDescription>
                    Add a new credit or debit card for your mentorship payments
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9101 1121" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Card</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid gap-4">
            {paymentMethods.map((method) => (
              <Card key={method.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted rounded-full p-2">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{method.type} •••• {method.last4}</div>
                        <div className="text-sm text-muted-foreground">Expires {method.expiry}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {method.isDefault && <Badge variant="outline">Default</Badge>}
                      <Button variant="ghost" size="sm">Edit</Button>
                      {!method.isDefault && <Button variant="ghost" size="sm">Remove</Button>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentsPage;
