import React from 'react';

function ActivityItem({ title, user, time }) {
  return (
    <div className='flex items-start space-x-3 mb-4'>
      <img
        src={`https://via.placeholder.com/32?text=${user[0]}`}
        alt={user}
        className='w-8 h-8 rounded-full'
      />
      <div>
        <p className='text-sm font-medium'>{title}</p>
        <p className='text-xs text-gray-500'>{time}</p>
      </div>
    </div>
  );
}

export default ActivityItem;
