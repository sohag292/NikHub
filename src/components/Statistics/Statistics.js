import React from 'react';
import './Statistics.css'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Statistics() {
  const data = [
    { name: 'Assignment 1', marks: 57 },
    { name: 'Assignment 2', marks: 49 },
    { name: 'Assignment 3', marks: 50 },
    { name: 'Assignment 4', marks: 60 },
    { name: 'Assignment 5', marks: 54 },
    { name: 'Assignment 6', marks: 59 },
    { name: 'Assignment 7', marks: 60 },
    { name: 'Assignment 8', marks: 58 },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%' }}>
        <h2 className='text-center py-5'>Assignment Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#3881d8" fill="#5124d8" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

