
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './MentorDashboardSidebar';
import DashboardHeader from './DashboardHeader';

const MentorDashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 lg:px-8 pt-24">
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MentorDashboardLayout;
