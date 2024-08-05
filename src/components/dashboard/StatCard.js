import React from 'react';

function StatCard({ title, value, change, negative = false }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h3 className='text-sm text-gray-500'>{title}</h3>
      <p className='text-2xl font-semibold'>{value}</p>
      <p className={`text-sm ${negative ? 'text-red-500' : 'text-green-500'}`}>
        {change}
      </p>
    </div>
  );
}

export default StatCard;
