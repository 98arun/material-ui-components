import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { jsonData } from "./dummyData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  return (
    <div
      style={{
        width: "80%",
        height: "30%",
        padding: "10px",
        backgroundColor: "#000",
        borderRadius: "15px",
      }}
    >
      <Line
        data={jsonData}
        height={400}
        width={1000}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Line Chart",
              font: { size: 20 },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
