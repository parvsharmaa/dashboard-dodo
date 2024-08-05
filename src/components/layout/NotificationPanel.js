import React from 'react';
import NotificationItem from '../common/NotificationItem';
import ActivityItem from '../common/ActivityItem';

function NotificationsPanel() {
  return (
    <div className='w-64 bg-white shadow-md overflow-y-auto'>
      <div className='p-4 border-b'>
        <h2 className='text-lg font-semibold'>Notifications</h2>
      </div>
      <div className='p-4'>
        <NotificationItem
          title='You have an issue that needs your attention'
          time='Just now'
          icon='🛠️'
        />
        <NotificationItem
          title='New team member joined'
          time='59 minutes ago'
          icon='👤'
        />
        <NotificationItem
          title='New product feature available'
          time='12 hours ago'
          icon='🚀'
        />
        <NotificationItem
          title='Andi Lane subscribed to you'
          time='Today, 11:59 AM'
          icon='🔔'
        />
      </div>
      <div className='p-4 border-t'>
        <h2 className='text-lg font-semibold mb-4'>Activities</h2>
        <ActivityItem
          title='Discount details updated'
          user='Anna'
          time='Just now'
        />
        <ActivityItem
          title='Aman added a new product'
          user='Aman'
          time='59 minutes ago'
        />
        <ActivityItem
          title='Refunds cleared'
          user='Sarah'
          time='12 hours ago'
        />
        <ActivityItem
          title='Tax report download completed'
          user='John'
          time='Today, 11:59 AM'
        />
        <ActivityItem
          title='Product details updated'
          user='Emma'
          time='Feb 2, 2023'
        />
      </div>
    </div>
  );
}

export default NotificationsPanel;
