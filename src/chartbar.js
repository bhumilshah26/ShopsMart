// Charts.js
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = () => {
  // Sample data for charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2ECC71',
          '#8E44AD',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2ECC71',
          '#8E44AD',
        ],
      },
    ],
  };

  return (
    <div className="flex justify-around my-8">
      {/* Bar Chart */}
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
        <Bar data={barChartData} />
      </div>

      {/* Line Chart */}
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
        <Line data={lineChartData} />
      </div>

      {/* Pie Chart */}
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

export default Chart;









// import React, { useRef, useEffect, useState } from "react";
// import { Chart as ChartJS, BarElement, LinearScale } from "chart.js";
// import "chart.js/auto";

// ChartJS.register(BarElement, LinearScale);

// const BarChart = ({ data }) => {
//   const chartRef = useRef(null);
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext("2d");
//     new ChartJS(ctx, {
//       type: "bar",
//       data: data,
//       options: {
//         legend: { display: false },
//         title: {
//           display: true,
//           text: data.labels[0], // Assuming the first label is the title
//         },
//       },
//     });
//   }, [data]);

//   return (
//     <div className="relative w-full h-80">
//       <canvas ref={chartRef} width="800" height="450"></canvas>
//     <div>
//     {chartData && <BarChart data={chartData} />}
//   </div>
//   </div>
//   );
// };

// export default BarChart;

// BarChart.js


// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js';

// const BarChart = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
//         datasets: [
//           {
//             label: 'Bar Chart Example',
//             data: [12, 19, 3, 5, 2],
//             backgroundColor: '#68D391', // Tailwind CSS color class or custom color
//             borderWidth: 1,
//           },
//         ],
//       },
//     });
//   }, []);

//   return (
//     <div className="w-full max-w-screen-md mx-auto">
//       <canvas ref={chartRef}></canvas>
//     </div>
//   );
// };

// export default BarChart;
