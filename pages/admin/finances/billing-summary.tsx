// components
import { AdminLayout } from "layouts";
// react
import React, { FC } from "react";
// chart js2
import { Line } from "react-chartjs-2";
// table
import CommonTable from "components/tables/CommonTable";

interface IProps {}

const BillingSummary: FC<IProps> = (props) => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Revenue",
        data: [10, 17, 1, 3, 1, 2],
        fill: true,
        backgroundColor: "rgba(255,151,74,0.1)",
        borderColor: "#FF974A",
      },
      {
        label: "Expense",
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: "rgba(0,115,255,0.1)",
        borderColor: "#0073FF",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const tableList = [
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
    {
      performanceIndicator: "Number of Appointments",
      period: "36",
      lastPeriod: "26",
      lastPercentage: "-48.00%",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "14px",
        border: "none",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {},
    },

    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "16px",
      },
    },
  };

  const columns = [
    {
      name: "Performance Indicator",
      selector: "performanceIndicator",
      cell: (row) => (
        <small className="text-light-grey font-smaller">{row["performanceIndicator"]}</small>
      ),
      wrap: false,
    },

    {
      name: "This Period",
      selector: "period",
      cell: (row) => <small className="text-light-grey font-smaller">{row["period"]}</small>,
      wrap: false,
    },
    {
      name: "Last Period",
      selector: "lastPeriod",
      cell: (row) => <small className="text-light-grey font-smaller">{row["lastPeriod"]}</small>,
      wrap: false,
    },
    {
      name: "Last Pecentage (%)",
      selector: "lastPercentage",
      cell: (row) => (
        <small className="text-light-grey font-smaller">{row["lastPercentage"]}</small>
      ),
      wrap: false,
    },
  ];

  return (
    <AdminLayout>
      <div className="bg-white">
        <div className="py-3 px-3">
          <h6 className="text-base-black fw-bold">Billing Summary</h6>
        </div>
        <div className="bg-light-grey-two w-100" style={{ height: 1 }}></div>
        <div className="h-25 bg-white card px-3 mx-5 my-3">
          <Line data={data} options={options} type="line" />
        </div>
        <div className="px-3">
          <CommonTable
            tableData={tableList}
            columns={columns}
            customStyles={customStyles}
            noHeader={true}
          />
        </div>
      </div>
    </AdminLayout>
  );
};
export default BillingSummary;
