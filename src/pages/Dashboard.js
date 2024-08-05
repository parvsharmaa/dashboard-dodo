import React from 'react';
import Navbar from '../components/layout/Navbar';
import NotificationsPanel from '../components/layout/NotificationPanel';
import StatCard from '../components/dashboard/StatCard';
import ChartCard from '../components/dashboard/ChartCard';
import BarChartCard from '../components/dashboard/BarChartCard';
import PieChartCard from '../components/dashboard/PieChartCard';
import useChartData from '../hooks/useChartData';

function Dashboard() {
  const { revenueData, transactionData, referrerData, locationData } =
    useChartData();

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden'>
        <main className='flex-1 overflow-y-auto p-6'>
          <div className='m-3'>Today </div>
          <div className='grid grid-cols-4 gap-4 mb-6'>
            <StatCard title='Revenue' value='$24M' change='+11.01%' />
            <StatCard
              title='Transaction'
              value='14K'
              change='-0.03%'
              negative
            />
            <StatCard
              title='Average transaction'
              value='$2K'
              change='+15.03%'
            />
            <StatCard title='Refunds' value='1K' change='+6.08%' />
          </div>
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <ChartCard title='Revenue' data={revenueData} dataKey='value' />
            <ChartCard
              title='Number of Transactions'
              data={transactionData}
              dataKey='value'
            />
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <BarChartCard
              title='Transaction Value by Referrer (in $)'
              data={referrerData}
            />
            <PieChartCard
              title='% Transaction Volume by Location'
              data={locationData}
            />
          </div>
        </main>
        <NotificationsPanel />
      </div>
    </div>
  );
}

export default Dashboard;
