// MixedChart.js
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const MixedChart = () => {
  const barData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Bar Dataset',
        backgroundColor: '#68D391',
        data: [12, 19, 3, 5, 2],
      },
    ],
  };

  const lineData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Line Dataset',
        borderColor: '#E53E3E',
        data: [5, 10, 15, 10, 5],
        fill: false,
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Mixed Chart (Line and Bar)</h2>
      <Bar data={barData} />
      <Line data={lineData} />
    </div>
  );
};

export default MixedChart;
