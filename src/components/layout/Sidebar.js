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
import { useSelector } from 'react-redux';

const SidebarItem = ({ icon, text, to, subItems = [], darkMode }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const active = location.pathname === to;
  const hasSubItems = subItems === null ? false : true;

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center gap-1 py-2 px-4 ${
          active ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200') : ''
        } ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
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
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      </Link>
      {isOpen && hasSubItems && (
        <ul className={`ml-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
  const user = useSelector((state) => state.user);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`w-64 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
      } shadow-md flex flex-col h-full p-2`}
    >
      <div className='p-4 flex items-center space-x-2'>
        <div className='w-7 h-7 rounded-full'>
          <UserCircleIcon
            className={darkMode ? 'text-gray-400' : 'text-gray-500'}
          />
        </div>
        <h1 className='text-xl font-bold'>{user.name || 'Superstars AI'}</h1>
      </div>
      <div
        className={`px-4 py-2 flex justify-between text-sm ${
          darkMode ? 'text-gray-500' : 'text-gray-700'
        }`}
      >
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
            darkMode={darkMode}
          />
          <SidebarItem
            icon='•'
            text='Transactions'
            to='/transactions'
            subItems={null}
            darkMode={darkMode}
          />
          <div
            className={`px-4 py-2 text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-700'
            }`}
          >
            Pages
          </div>
          <SidebarItem
            icon={<RocketLaunchIcon className='h-6 w-6' />}
            text='Overview'
            to='/'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<CurrencyDollarIcon className='h-6 w-6' />}
            text='Transactions'
            to='/transactions'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<NewspaperIcon className='h-6 w-6' />}
            text='Invoices'
            to='/invoices'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<UsersIcon className='h-6 w-6' />}
            text='Customers'
            to='/customers'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<NewspaperIcon className='h-6 w-6' />}
            text='Product Catalog'
            to='/product-catalog'
            subItems={[
              { text: 'Overview', to: '/product-catalog' },
              { text: 'Products', to: '/product-catalog/products' },
              { text: 'Discounts', to: '/product-catalog/discounts' },
              { text: 'Taxable Items', to: '/product-catalog/taxable-items' },
            ]}
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<ChartBarSquareIcon className='h-6 w-6' />}
            text='Reports'
            to='/reports'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<ShoppingCartIcon className='h-6 w-6' />}
            text='Checkout'
            to='/checkout'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<BookOpenIcon className='h-6 w-6' />}
            text='Business Account'
            to='/business-account'
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<Cog8ToothIcon className='h-6 w-6' />}
            text='Settings'
            to='/settings'
            darkMode={darkMode}
          />
        </ul>
        <div
          className={`px-4 py-2 text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-700'
          }`}
        >
          Pages
        </div>
        <ul>
          <SidebarItem
            icon={<DocumentTextIcon className='h-6 w-6' />}
            text='Documentation'
            to='/documentation'
            subItems={null}
            darkMode={darkMode}
          />
          <SidebarItem
            icon={<ChatBubbleBottomCenterTextIcon className='h-6 w-6' />}
            text='Help Center'
            to='/help-center'
            subItems={null}
            darkMode={darkMode}
          />
        </ul>
      </nav>
      {!darkMode && (
        <div className='mt-auto p-6'>
          <img src='/img/dodo_logo.jpg' alt='DODO PAYMENTS' className='h-14' />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
