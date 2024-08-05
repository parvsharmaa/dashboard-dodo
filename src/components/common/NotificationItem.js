import React from 'react';

function NotificationItem({ title, time, icon }) {
  return (
    <div className='flex items-start space-x-3 mb-4'>
      <div className='text-2xl'>{icon}</div>
      <div>
        <p className='text-sm font-medium'>{title}</p>
        <p className='text-xs text-gray-500'>{time}</p>
      </div>
    </div>
  );
}

export default NotificationItem;
