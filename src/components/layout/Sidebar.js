import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  UserCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  UsersIcon,
  ChartBarSquareIcon,
  ShoppingCartIcon,
  BookOpenIcon,
  Cog8ToothIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

const SidebarItem = ({ icon, text, to, subItems = [] }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const active = location.pathname === to;
  const hasSubItems = subItems === null ? false : true;

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center gap-1 py-2 px-4 ${
          active ? 'bg-gray-200' : ''
        }`}
        onClick={() => hasSubItems && setIsOpen(!isOpen)}
      >
        {hasSubItems && (
          <span>
            {isOpen ? (
              <ChevronDownIcon className='h-4 w-4' />
            ) : (
              <ChevronRightIcon className='h-4 w-4' />
            )}
          </span>
        )}
        <div className='flex items-center space-x-3'>
          <span className='text-gray-500'>{icon}</span>
          <span>{text}</span>
        </div>
      </Link>
      {isOpen && hasSubItems && (
        <ul className='ml-8'>
          {subItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className='block py-2 px-4'>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

function Sidebar() {
  return (
    <div className='w-64 bg-white shadow-md flex flex-col h-ful p-2'>
      <div className='p-4 flex items-center space-x-2'>
        <div className='w-7 h-7 rounded-full'>
          <UserCircleIcon class='text-gray-500' />
        </div>
        <h1 className='text-xl font-bold'>Superstars AI</h1>
      </div>
      <div className='px-4 py-2 flex justify-between text-sm text-gray-500'>
        <span>Favorites</span>
        <span>Recently</span>
      </div>
      <nav className='flex-1 overflow-y-auto'>
        <ul>
          <SidebarItem
            icon='•'
            text='Get Started'
            to='/get-started'
            subItems={null}
          />
          <SidebarItem
            icon='•'
            text='Transactions'
            to='/transactions'
            subItems={null}
          />
          <div className='px-4 py-2 text-sm text-gray-500'>Pages</div>
          <SidebarItem
            icon={<RocketLaunchIcon class='h-6 w-6 text-gray-500' />}
            text='Overview'
            to='/'
          />
          <SidebarItem
            icon={<CurrencyDollarIcon class='h-6 w-6 text-gray-500' />}
            text='Transactions'
            to='/transactions'
          />
          <SidebarItem
            icon={<NewspaperIcon class='h-6 w-6 text-gray-500' />}
            text='Invoices'
            to='/invoices'
          />
          <SidebarItem
            icon={<UsersIcon class='h-6 w-6 text-gray-500' />}
            text='Customers'
            to='/customers'
          />
          <SidebarItem
            icon={<NewspaperIcon class='h-6 w-6 text-gray-500' />}
            text='Product Catalog'
            to='/product-catalog'
            subItems={[
              { text: 'Overview', to: '/product-catalog' },
              { text: 'Products', to: '/product-catalog/products' },
              { text: 'Discounts', to: '/product-catalog/discounts' },
              { text: 'Taxable Items', to: '/product-catalog/taxable-items' },
            ]}
          />
          <SidebarItem
            icon={<ChartBarSquareIcon class='h-6 w-6 text-gray-500' />}
            text='Reports'
            to='/reports'
          />
          <SidebarItem
            icon={<ShoppingCartIcon class='h-6 w-6 text-gray-500' />}
            text='Checkout'
            to='/checkout'
          />
          <SidebarItem
            icon={<BookOpenIcon class='h-6 w-6 text-gray-500' />}
            text='Business Account'
            to='/business-account'
          />
          <SidebarItem
            icon={<Cog8ToothIcon class='h-6 w-6 text-gray-500' />}
            text='Developer Tools'
            to='/developer-tools'
          />
        </ul>
        <div className='px-4 py-2 text-sm text-gray-500'>Pages</div>
        <ul>
          <SidebarItem
            icon={<DocumentTextIcon class='h-6 w-6 text-gray-500' />}
            text='Documentation'
            to='/documentation'
            subItems={null}
          />
          <SidebarItem
            icon={
              <ChatBubbleBottomCenterTextIcon class='h-6 w-6 text-gray-500' />
            }
            text='Help Center'
            to='/help-center'
            subItems={null}
          />
        </ul>
      </nav>
      <div className='mt-auto p-6'>
        <img src='/img/dodo_logo.jpg' alt='DODO PAYMENTS' className='h-14' />
      </div>
    </div>
  );
}

export default Sidebar;
