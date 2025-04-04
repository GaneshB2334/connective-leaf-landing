
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MentorProfile from "./pages/MentorProfile";
import NotFound from "./pages/NotFound";

// Dashboard pages
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ProfilePage from "./pages/dashboard/ProfilePage";
import BookingsPage from "./pages/dashboard/BookingsPage";
import PaymentsPage from "./pages/dashboard/PaymentsPage";

// Mentor Dashboard pages
import MentorDashboardLayout from "./components/dashboard/MentorDashboardLayout";
import ServicesPage from "./pages/mentor/ServicesPage";
import MentorPaymentsPage from "./pages/mentor/PaymentsPage";
import WalletPage from "./pages/mentor/WalletPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentor/:mentorId" element={<MentorProfile />} />
          
          {/* Mentee Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
          </Route>
          
          {/* Mentor Dashboard Routes */}
          <Route path="/mentor/dashboard" element={<MentorDashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="payments" element={<MentorPaymentsPage />} />
            <Route path="wallet" element={<WalletPage />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
