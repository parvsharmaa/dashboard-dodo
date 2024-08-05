import {
  BugAntIcon,
  UserIcon,
  SquaresPlusIcon,
  RssIcon,
} from '@heroicons/react/24/outline';

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const Stats = [
  {
    title: 'Revenue',
    value: '$24M',
    change: '+11.01%',
  },
  {
    title: 'Transaction',
    value: '14K',
    change: '-0.03%',
  },
  {
    title: 'Average transaction',
    value: '$2K',
    change: '+15.03%',
  },
  {
    title: 'Refunds',
    value: '1K',
    change: '+6.08%',
  },
];

export const Notifications = [
  {
    title: 'You have an issue that needs your attention',
    time: 'Just now',
    icon: <BugAntIcon class='h-6 w-6 text-gray-500' />,
  },
  {
    title: 'New team member joined',
    time: '59 minutes ago',
    icon: <UserIcon class='h-6 w-6 text-gray-500' />,
  },
  {
    title: 'New product feature available',
    time: '12 hours ago',
    icon: <SquaresPlusIcon class='h-6 w-6 text-gray-500' />,
  },
  {
    title: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    icon: <RssIcon class='h-6 w-6 text-gray-500' />,
  },
];

export const Activities = [
  {
    title: 'Discount details updated',
    user: 'Anna',
    time: 'Just now',
  },
  {
    title: 'Aman added a new product',
    user: 'Aman',
    time: '59 minutes ago',
  },
  {
    title: 'Refunds cleared',
    user: 'Sarah',
    time: '12 hours ago',
  },
  {
    title: 'Tax report download completed',
    user: 'John',
    time: 'Today, 11:59 AM',
  },
  {
    title: 'Product details updated',
    user: 'Emma',
    time: 'Feb 2, 2024',
  },
];
