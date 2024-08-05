import React from 'react';
import {
  RocketLaunchIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  DocumentIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

const SidebarItem = ({ Icon, text, active }) => (
  <li
    className={`flex items-center space-x-2 py-2 px-4 ${
      active ? 'bg-gray-200' : ''
    }`}
  >
    <Icon className='h-5 w-5' />
    <span>{text}</span>
  </li>
);

function Sidebar() {
  return (
    <div className='w-64 bg-white shadow-md'>
      <div className='p-4'>
        <h1 className='text-xl font-bold'>Superstars AI</h1>
      </div>
      <nav>
        <ul>
          <h3 className='px-4 py-2 text-sm font-semibold text-gray-500'>
            Favourites
          </h3>
          <SidebarItem Icon={RocketLaunchIcon} text='Get Started' />
          <SidebarItem Icon={CurrencyDollarIcon} text='Transactions' />
          <h3 className='px-4 py-2 text-sm font-semibold text-gray-500'>
            Pages
          </h3>
          <SidebarItem Icon={ChartBarIcon} text='Overview' active />
          <SidebarItem Icon={CurrencyDollarIcon} text='Transactions' />
          <SidebarItem Icon={DocumentTextIcon} text='Invoices' />
          <SidebarItem Icon={UserGroupIcon} text='Customers' />
          <SidebarItem Icon={ShoppingBagIcon} text='Product Catalog' />
          <SidebarItem Icon={ChartBarIcon} text='Reports' />
          <SidebarItem Icon={ShoppingCartIcon} text='Checkout' />
          <SidebarItem Icon={BuildingOfficeIcon} text='Business Account' />
          <SidebarItem Icon={WrenchScrewdriverIcon} text='Developer Tools' />
          <h3 className='px-4 py-2 text-sm font-semibold text-gray-500'>
            Pages
          </h3>
          <SidebarItem Icon={DocumentIcon} text='Documentation' />
          <SidebarItem Icon={QuestionMarkCircleIcon} text='Help Center' />
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
