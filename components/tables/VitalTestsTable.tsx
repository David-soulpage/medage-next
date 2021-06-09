import React from "react";
// react data table
import DataTable from "react-data-table-component";

const VitalTestsTable = () => {
  const tableData = [
    {
      testName: "Systolic B.P",
      value: "110",
    },
    {
      testName: "Systolic B.P",
      value: "110",
    },
    {
      testName: "Systolic B.P",
      value: "110",
    },
    {
      testName: "Systolic B.P",
      value: "110",
    },
  ];

  const columns = [
    {
      name: "Test Name",
      selector: "testName",
    },
    {
      name: "26/05.2020",
      selector: "value",
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

export default VitalTestsTable;
