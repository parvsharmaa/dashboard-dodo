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
import { useSelector } from 'react-redux';

function ChartCard({ title, data, dataKey, yAxisLabel, tooltipFormatter }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`p-4 rounded-lg shadow ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-5 ${
          darkMode ? 'text-gray-300' : 'text-gray-800'
        }`}
      >
        {title}
      </h3>
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
            stroke={darkMode ? '#555' : '#ccc'}
          />
          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(tick) => tick}
            stroke={darkMode ? '#ccc' : '#555'}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) =>
              `${yAxisLabel}${value / 1000}${yAxisLabel === '$' ? 'M' : 'k'}`
            }
            stroke={darkMode ? '#ccc' : '#555'}
          />
          <Tooltip
            formatter={tooltipFormatter}
            labelFormatter={() => ``}
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              border: 'none',
              borderRadius: '4px',
            }}
            itemStyle={{ color: darkMode ? '#fff' : '#000' }}
          />
          <Area
            type='monotone'
            dataKey={dataKey}
            stroke={darkMode ? '#fff' : '#000'}
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
