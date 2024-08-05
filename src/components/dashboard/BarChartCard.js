import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function BarChartCard({ title, data }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>
      <ResponsiveContainer width='100%' height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='value' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartCard;