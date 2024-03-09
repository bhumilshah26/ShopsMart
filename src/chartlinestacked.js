// StackedLineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const StackedLineChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: '#68D391',
        data: [5, 10, 15, 10, 5],
        fill: true,
      },
      {
        label: 'Dataset 2',
        borderColor: '#4299E1',
        data: [10, 15, 10, 5, 10],
        fill: true,
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Stacked Line Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default StackedLineChart;
