// GroupedBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const GroupedBarChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: '#68D391',
        data: [12, 19, 3, 5, 2],
      },
      {
        label: 'Dataset 2',
        backgroundColor: '#4299E1',
        data: [8, 15, 7, 2, 6],
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Grouped Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default GroupedBarChart;
