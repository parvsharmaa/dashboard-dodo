import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import ChartCard from '../components/dashboard/ChartCard';
import BarChartCard from '../components/dashboard/BarChartCard';
import PieChartCard from '../components/dashboard/PieChartCard';
import useChartData from '../hooks/useChartData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Stats } from '../utils/constants';

function Dashboard() {
  const { revenueData, transactionData, referrerData, locationData } =
    useChartData();

  return (
    <main className='flex-1 overflow-y-auto'>
      <div className='m-2 flex gap-1'>
        Today
        <ChevronDownIcon className='h-3 w-3 text-gray-500 mt-1.5' />
      </div>
      <div className='grid grid-cols-4 gap-6 mb-4'>
        {Stats.map((stat, index) => (
          <StatCard key={index} ind={index} {...stat} />
        ))}
      </div>
      <div className='grid grid-cols-2 gap-6 mb-4'>
        <ChartCard
          title='Revenue'
          data={revenueData}
          dataKey='value'
          yAxisLabel='$'
          tooltipFormatter={(value) => [
            `$${value.toLocaleString()}`,
            'Revenue',
          ]}
        />
        <ChartCard
          title='Number of Transactions'
          data={transactionData}
          dataKey='value'
          yAxisLabel=''
          tooltipFormatter={(value) => [
            `${value.toLocaleString()}`,
            'Transactions',
          ]}
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
  );
}

export default Dashboard;
