import React from 'react';
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

function StatCard({ ind, title, value, change }) {
  const negative = change.charAt(0) === '-' ? true : false;
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`p-6 rounded-xl shadow ${
        darkMode
          ? 'bg-gray-700'
          : (ind + 1) % 2 === 0
          ? 'bg-blue-100'
          : 'bg-yellow-50'
      }`}
    >
      <h3 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {title}
      </h3>
      <div className='flex gap-10 mt-1'>
        <p
          className={`text-4xl font-semibold ${
            darkMode ? 'text-gray-200' : 'text-black'
          }`}
        >
          {value}
        </p>
        <p
          className={`text-md mt-2 ml-1 flex gap-1 ${
            negative ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {change}
          {negative ? (
            <ArrowTrendingDownIcon className='h-6 w-6' />
          ) : (
            <ArrowTrendingUpIcon className='h-6 w-6' />
          )}
        </p>
      </div>
    </div>
  );
}

export default StatCard;
