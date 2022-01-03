import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { jsonData } from "./dummyData";
ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

const DoughnutChart = (props) => {
  return (
    <div
      style={{
        width: "350px",
        padding: "10px",
        backgroundColor: "black",
        borderRadius: "15px",
      }}
    >
      <Doughnut
        data={jsonData}
        height={200}
        width={250}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Doughnut Chart",
              font: { size: 20 },
            },
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
