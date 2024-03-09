import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import "chart.js/auto";

ChartJS.register(ArcElement, Tooltip);

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new ChartJS(ctx, {
      type: "pie",
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

export default PieChart;
