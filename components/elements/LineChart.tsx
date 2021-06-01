import React, { FC } from "react";
//React Chart Js
import { Line } from "react-chartjs-2";

const LineChart: FC = () => {
  //data
  const data = {
    labels: ["May1", "May2", "May3", "May4", "May5", "May6"],
    datasets: [
      {
        label: "Reports",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "#F4BE5E",
        borderColor: "#F4BE5E",
      },
    ],
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h6 className="title m-0">Total Reports Processed</h6>
        <div className="d-flex">
          <ul className="nav">
            <li className="nav-item">
              <p className="nav-link px-3 active m-0" aria-current="page">
                Day
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link px-3 m-0 border rounded">Week</p>
            </li>
            <li className="nav-item">
              <p className="nav-link px-3 m-0">Month</p>
            </li>
          </ul>
          <button className="btn btn-outline-secondary">2021</button>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <h6 className="text-green title">+9.28 (12.80 %)</h6>
      </div>
      {/* Line Chart */}
      <Line type="line" data={data} height={50} />
    </div>
  );
};

export default LineChart;
