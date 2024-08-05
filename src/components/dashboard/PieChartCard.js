import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { COLORS } from '../../utils/constants';

function PieChartCard({ title, data }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
      <h3 className='text-lg font-semibold mb-4'>{title}</h3>
      <ResponsiveContainer width='100%' height={200}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className='grid grid-cols-2 gap-2 mt-4'>
        {data.map((item, index) => (
          <div key={item.name} className='flex items-center'>
            <div
              className={`w-3 h-3 rounded-full mr-2`}
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className='text-sm'>
              {item.name}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartCard;
