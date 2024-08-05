import React from 'react';
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

function StatCard({ ind, title, value, change }) {
  const negative = change.charAt(0) === '-' ? true : false;

  console.log(ind);

  return (
    <div
      className={`${
        (ind + 1) % 2 === 0 ? 'bg-blue-100' : 'bg-yellow-50'
      } p-6 rounded-xl shadow`}
    >
      <h3 className='text-sm text-gray-500'>{title}</h3>
      <div className='flex gap-10 mt-1'>
        <p className='text-4xl font-semibold'>{value}</p>
        <p
          className={`text-md ${
            negative ? 'text-red-500' : 'text-green-500'
          } mt-2 ml-1 flex gap-1`}
        >
          {change}
          {negative ? (
            <ArrowTrendingDownIcon class='h-6 w-6' />
          ) : (
            <ArrowTrendingUpIcon class='h-6 w-6' />
          )}
        </p>
      </div>
    </div>
  );
}

export default StatCard;
