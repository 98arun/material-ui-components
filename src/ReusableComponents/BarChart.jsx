import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { jsonData } from "./dummyData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  return (
    <div
      style={{
        width: "300px",
        height: "250px",
        padding: "10px",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <Bar
        data={jsonData}
        height={400}
        width={1000}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Bar Chart",
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
