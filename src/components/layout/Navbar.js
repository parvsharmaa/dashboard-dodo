import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  BellIcon,
  SunIcon,
  RocketLaunchIcon,
  StarIcon,
  ClockIcon,
  WindowIcon,
} from '@heroicons/react/24/outline';

function Navbar() {
  const location = useLocation();
  const pageName =
    location.pathname === '/' ? 'Overview' : location.pathname.slice(1);

  function capitalizeFirstLetterOfEachWord(str) {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <nav className='bg-white shadow-sm'>
      <div className='flex justify-between items-center p-4'>
        <div className='flex items-center space-x-2'>
          <RocketLaunchIcon class='h-6 w-6 text-gray-500' />
          <StarIcon class='h-6 w-6 text-gray-500' />
          <span className='text-gray-500'>Pages</span>
          <span>/</span>
          <span className='font-semibold text-gray-700'>
            {capitalizeFirstLetterOfEachWord(pageName)}
          </span>
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
          <ClockIcon class='h-6 w-6' />
          <BellIcon className='h-6 w-6' />
          <WindowIcon class='h-6 w-6' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
