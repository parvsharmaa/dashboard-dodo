import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function ChartCard({ title, data, dataKey, yAxisLabel, tooltipFormatter }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h3 className='text-lg font-semibold mb-5'>{title}</h3>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <defs>
            <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1' />
          </defs>
          <CartesianGrid
            strokeDasharray='4 4'
            vertical={false}
            className='grid-blur'
          />
          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            interval={0}
            tickFormatter={(tick) => tick}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) =>
              `${yAxisLabel}${value / 1000}${yAxisLabel === '$' ? 'M' : 'k'}`
            }
          />
          <Tooltip
            formatter={tooltipFormatter}
            labelFormatter={(label) => ``}
            contentStyle={{
              backgroundColor: '#333',
              border: 'none',
              borderRadius: '4px',
            }}
            itemStyle={{ color: '#fff' }}
          />
          <Area
            type='monotone'
            dataKey={dataKey}
            stroke='#000'
            strokeWidth={3}
            fillOpacity={1}
            fill='url(#colorValue)'
          />
        </AreaChart>
      </ResponsiveContainer>
      <style jsx>{`
        .grid-blur line {
          filter: blur(2px); /* Adjust the blur intensity */
        }
      `}</style>
    </div>
  );
}

export default ChartCard;
