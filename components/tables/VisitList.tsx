import React from "react";
import DataTable from "react-data-table-component";

const VisitList = () => {
  const tableData = [
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      info: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      info: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      info: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      info: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      info: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      info: "Lorem ipsum is place...",
    },
  ];

  const columns = [
    {
      name: "Problem",
      selector: "problem",
    },
    {
      name: "Status",
      selector: "status",
    },
    {
      name: "Doctor",
      selector: "doctor",
    },
    {
      name: "Date",
      selector: "date",
    },
    {
      name: "Additional Information",
      selector: "info",
    },
  ];
  // Table Styles
  const customStyles = {
    headCells: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "14px",
        border: "none",
        fontWeight: "700",
      },
    },
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "16px",
        color: "#44444f",
      },
    },
  };
  return <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />;
};

export default VisitList;
