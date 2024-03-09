// Chart.js
import React from 'react';
import { Bar, Line, Pie, Radar, Doughnut } from 'react-chartjs-2';

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

  const groupedBarChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
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

  const mixedChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Bar Dataset',
        backgroundColor: '#68D391',
        data: [12, 19, 3, 5, 2],
      },
      {
        label: 'Line Dataset',
        borderColor: '#E53E3E',
        data: [5, 10, 15, 10, 5],
        fill: false,
      },
    ],
  };

  const stackedLineChartData = {
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

  const progressiveLineChartData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Progressive Line Chart',
        borderColor: '#68D391',
        data: [5, 10, 15, 10, 5],
        fill: false,
      },
    ],
  };

  const progressiveLineChartWithOptionsData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Progressive Line Chart with Options',
        borderColor: '#4299E1',
        data: [5, 10, 15, 10, 5],
        fill: false,
      },
    ],
  };

  const progressiveLineWithDelayChartData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Progressive Line with Delay',
        borderColor: '#E53E3E',
        data: [5, 10, 15, 10, 5],
        fill: false,
      },
    ],
  };

  const progressiveLineWithDelayChartWithOptionsData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Progressive Line with Delay and Options',
        borderColor: '#ED8936',
        data: [5, 10, 15, 10, 5],
        fill: false,
      },
    ],
  };

  const radarChartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My Radar Chart',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#8E44AD'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#8E44AD'],
      },
    ],
  };


  return (
    <div className="flex flex-wrap justify-around my-8">
      {/* Bar Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
        <Bar data={barChartData} />
      </div>

      {/* Line Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
        <Line data={lineChartData} />
      </div>

      {/* Grouped Bar Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Grouped Bar Chart</h2>
        <Bar data={groupedBarChartData} />
      </div>

      {/* Mixed Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Mixed Chart</h2>
        <Bar data={mixedChartData} />
      </div>

      {/* Stacked Line Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Stacked Line Chart</h2>
        <Line data={stackedLineChartData} />
      </div>

      {/* Progressive Line Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Progressive Line Chart</h2>
        <Line data={progressiveLineChartData} />
      </div>

      {/* Progressive Line Chart with Options */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">
          Progressive Line Chart with Options
        </h2>
        <Line data={progressiveLineChartWithOptionsData} />
      </div>

      {/* Progressive Line with Delay and Options Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">
          Progressive Line with Delay and Options Chart
        </h2>
        <Line data={progressiveLineWithDelayChartWithOptionsData} />
      </div>

      {/* Progressive Line with Delay Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">
          Progressive Line with Delay Chart
        </h2>
        <Line data={progressiveLineWithDelayChartData} />
      </div>

      {/* Radar Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Radar Chart</h2>
        <Radar data={radarChartData} />
      </div>

      {/* Doughnut Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Doughnut Chart</h2>
        <Doughnut data={doughnutChartData} />
      </div>

      {/* Pie Chart */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
        <Pie data={pieChartData} />
      </div>

    </div>
  );
};

export default Chart;
