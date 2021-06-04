import React, { FC } from "react";
// React Chart Js
import { Bar } from "react-chartjs-2";

const BarChart: FC = () => {
  //data
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may", "june"],
    datasets: [
      {
        label: "Received Messages",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#3DD598",
      },
      {
        label: "Sent Messages",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "#0062FF",
      },
    ],
  };

  const options = {
    animate: false,
    cornerRadius: 20,
    barThickness: 8,
    borderRadius: 12,
    responsive: true,
  };
  return (
    <div>
      <h6 className="title">Messages</h6>
      {/* Bar Chart */}
      <Bar data={data} options={options} type="bar" />
    </div>
  );
};

export default BarChart;
