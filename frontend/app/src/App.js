import React from "react";

import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Polar } from "react-chartjs-2";

const graph1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Unemployment Claims",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 3,
      fill: false,
      brderColor: "rgba(75,192,192,1)",
      data: [2, 1, 2, 1, 1, 1],
    },
    {
      label: "Number of Cases",
      data: [10, 20, 12, 15, 10, 15],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const graph2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Cases",
      data: [10, 20, 12, 15, 10, 15],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
    },
  ],
};

const graph3 = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
      label: "Effects of Govt Orders in June 2020, IL", // for legend
    },
  ],
  labels: ["Number of Cases", "Tests Conducted", "Unemployment Claims"],
};

export default function App() {
  return (
    <div className="App">
      <Line data={graph1} />
      <Bar
        data={graph2}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
      <Polar data={graph3} />
    </div>
  );
}
