
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, User, Calendar, CreditCard } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Bookings', href: '/dashboard/bookings', icon: Calendar },
  { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-gray-200 bg-white transition-all duration-300 pt-16",
        collapsed ? "w-[70px]" : "w-64"
      )}
    >
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => cn(
                "flex items-center gap-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-center rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
        >
          {collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
