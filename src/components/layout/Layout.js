import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import NotificationsPanel from './NotificationPanel';

function Layout({ children }) {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Navbar />
        <div className='flex flex-1 overflow-hidden bg-white'>
          <main className='flex-1 overflow-y-auto p-6 border-t-2'>
            {children}
          </main>
        </div>
      </div>
      <NotificationsPanel />
    </div>
  );
}

export default Layout;
