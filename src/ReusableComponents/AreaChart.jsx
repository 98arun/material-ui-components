import { Line } from "react-chartjs-2";
import { jsonData } from "./dummyData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 25, 35, 51, 54, 76],
      backgroundColor: "#666D78",
      borderColor: "black",
      borderWidth: 4,
      fill: true,
      lineTension: 0.5,
      pointRadius: 1,
    },
  ],
};


const options = {
  plugins: {
    title: {
      display: false,
      text: "Area Chart",
      font: { size: 20 },
    },

    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontColor: "#323130",
        size: 20,
      },
    },
  },

  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },

    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

export default function AreaChart() {
  return (
    <div
      style={{
        width: "300px",
        height: "250px",
        backgroundColor: "white",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: "20%", color: "black" }}>
        <p style={{ margin: 0 }}>Conversion Area Chart</p>
        <h2 style={{ margin: 0 }}>444</h2>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
