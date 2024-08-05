import React from 'react';
import NotificationItem from '../common/NotificationItem';
import ActivityItem from '../common/ActivityItem';
import { Notifications, Activities } from '../../utils/constants';

function NotificationsPanel() {
  return (
    <div className='w-90 bg-white shadow-md overflow-y-auto'>
      <div className='p-6'>
        <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
        {Notifications.map((item, index) => {
          return (
            <NotificationItem
              key={index}
              title={item.title}
              time={item.time}
              icon={item.icon}
            />
          );
        })}
      </div>
      <div className='p-6'>
        <h2 className='text-lg font-semibold mb-4'>Activities</h2>
        {Activities.map((item, index) => {
          return (
            <ActivityItem
              key={index}
              title={item.title}
              user={item.user}
              time={item.time}
              last={index === Activities.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotificationsPanel;
