import React from 'react';
import {
  MagnifyingGlassIcon,
  BellIcon,
  SunIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className='bg-white shadow-sm'>
      <div className='flex justify-between items-center p-4'>
        <div className='flex items-center space-x-2'>
          <RocketLaunchIcon class='h-6 w-6 text-gray-500' />
          <StarIcon class='h-6 w-6 text-gray-500' />
          <span>Pages</span>
          <span>/</span>
          <span className='font-semibold'>Overview</span>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='pl-8 pr-4 py-2 rounded-lg border'
            />
            <MagnifyingGlassIcon className='h-5 w-5 absolute left-2 top-2.5 text-gray-400' />
          </div>
          <SunIcon className='h-6 w-6' />
          <BellIcon className='h-6 w-6' />
          <div className='flex items-center space-x-2'>
            <img
              src='https://via.placeholder.com/32'
              alt='User'
              className='w-8 h-8 rounded-full'
            />
            <ChevronDownIcon className='h-4 w-4' />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
