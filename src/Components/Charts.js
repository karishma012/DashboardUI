import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function DonutChart({ value, color, label }) {
  const percentage = `${value}%`;

  return (
    <div className="w-1/4 text-center relative">
      <PieChart width={150} height={150}>
        <Pie
          data={[{ value }, { value: 100 - value }]}
          dataKey="value"
          outerRadius={40}
          innerRadius={30}
          paddingAngle={5}
          startAngle={90}
          endAngle={450}
        >
          <Cell key="cell-0" fill={color} />
          <Cell key="cell-1" fill="#ccc" />
        </Pie>
      </PieChart>
      <svg className="absolute inset-0" width="100%" height="100%">
        <text x="50%" y="50%" fill={color} textAnchor="middle" dominantBaseline="middle" fontSize="20">
          {percentage}
        </text>
      </svg>
      <p className="text-sm absolute bottom-0 left-0 right-0">
        {label}
      </p>
    </div>
  );
}

function Charts() {
  return (
    <div className="container ml-24 max-w-xl my-8">
      <div className="bg-white p-4 shadow-lg rounded-3xl">
        <h2 className="text-xl mb-2 font-bold">All Customers</h2>
        <div className="flex flex-wrap py-2 text-gray-500">
          <DonutChart value={85} color="indigo" label="Current Customers" />
          <DonutChart value={66} color="green" label="New Customers" />
          <DonutChart value={90} color="red" label="Target Customers" />
          <DonutChart value={30} color="lightcoral" label="Retarget Customers" />
        </div>
      </div>
    </div>
  );
}

export default Charts;
