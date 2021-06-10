import React from "react";
//local components
import { CommonCard } from "components/card";
//icons
import { ChevronRight } from "components/styled-icons";
//chart js
import { Bar } from "react-chartjs-2";

const BillingSummary = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#0073FF",
        borderColor: "#0073FF",
        borderWidth: 1,
        stack: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Expense",
        backgroundColor: "#FF974A",
        borderColor: "#FF974A",
        borderWidth: 1,
        stack: 1,
        data: [45, 79, 10, 41, 16, 85, 20],
      },
    ],
  };
  const options = {
    animate: false,
    cornerRadius: 20,
    barThickness: 8,
    borderRadius: 12,
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  return (
    <>
      <CommonCard>
        <div className="d-flex align-items-center">
          <h6 className="m-0">Billing Summary</h6>
          <div className="ms-auto d-flex align-items-center">
            <button className="btn btn-outline-light text-dark">Month</button>
            <button className="btn btn-outline text-muted mx-3">Quarter</button>
            <button className="btn btn-outline text-muted me-3">Yearn</button>
            <ChevronRight size="20" />
          </div>
        </div>
        <div className="mt-3">
          <Bar data={data} options={options} type="bar" />
        </div>
      </CommonCard>
    </>
  );
};

export default BillingSummary;
