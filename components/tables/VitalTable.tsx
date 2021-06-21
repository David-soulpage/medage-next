import React from "react";
// react data table
import DataTable from "react-data-table-component";
//react ratings
import Rating from "react-rating";

const VitalTable = () => {
  const tableData = [
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 1,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 2,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 5,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 3,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 1,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 5,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 3,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 1,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
    {
      code: "1000752",
      description: "11031-2: Lymphocytes/100 leukocytes in Body fluid",
      status: "Active",
      severity: 5,
      diagnosis: "11/05/2021",
      heartRate: "70",
    },
  ];

  const columns = [
    {
      name: "LOINC code",
      selector: "code",
    },
    {
      name: "Description",
      selector: "description",
    },
    {
      name: "Status",
      selector: "status",
    },
    {
      name: "Severity",
      cell: (row) => <Rating initialRating={row.severity} readonly stop={4} />,
    },
    {
      name: "Diagnosis",
      selector: "diagnosis",
    },
    {
      name: "Heart Rate",
      selector: "heartRate",
    },
    {
      name: "Ideal Range",
      selector: "heartRate",
    },
  ];
  // Table Styles
  const customStyles = {
    headCells: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        borderBottom: "1px solid #ECECF2",
        borderTop: "1px solid #ECECF2",
        color: "#1E2233",
        fontSize: "14px",
        border: "none",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "14px",
        fontWeight: "normal",
      },
    },
  };
  return <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />;
};

export default VitalTable;
