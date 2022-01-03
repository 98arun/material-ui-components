import React from "react";
import { Pie } from "react-chartjs-2";
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

const PieChart = (props) => {
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
      <Pie
        data={jsonData}
        height={400}
        width={1000}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Pie Chart",
              font: { size: 16 },
            },
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontColor: "#323130",
                fontSize: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
