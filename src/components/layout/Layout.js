import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import NotificationsPanel from './NotificationPanel';
import { toggleDarkMode } from '../../redux/ThemeSlice';

function Layout({ children }) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`flex h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'
      }`}
    >
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Navbar
          onToggleDarkMode={() => dispatch(toggleDarkMode())}
          darkMode={darkMode}
        />
        <div
          className={`flex flex-1 overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
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
