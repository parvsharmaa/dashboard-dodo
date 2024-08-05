import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
