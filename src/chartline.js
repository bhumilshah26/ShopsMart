import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import "chart.js/auto";

ChartJS.register(LineElement, LinearScale, PointElement, Title, Tooltip);

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new ChartJS(ctx, {
      type: "line",
      data: data,
      options: {
        legend: { display: true },
        title: {
          display: true,
          text: data.labels[0], // Assuming the first label is the title
        },
      },
    });
  }, [data]);

  return (
    <div className="relative w-full h-80">
      <canvas ref={chartRef} width="800" height="450"></canvas>
    </div>
  );
};

export default LineChart;
