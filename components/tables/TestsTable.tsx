import React, { FC } from "react";
//local component
import DataTable from "react-data-table-component";
//icons
import { Edit } from "@styled-icons/material";
import { Delete } from "@styled-icons/fluentui-system-regular";

const TestsTable: FC = () => {
  const tableData = [
    {
      apmntID: "JA-09821",
      testName: "Magnetic Resonance Imaging (MRI) ",
      date: "15-Apr-2021",
      code: "5792-7",
      range: "Normal",
      resultValue: "9.3",
    },
    {
      apmntID: "JA-09821",
      testName: "Magnetic Resonance Imaging (MRI) ",
      date: "15-Apr-2021",
      code: "5792-7",
      range: "Normal",
      resultValue: "9.3",
    },
    {
      apmntID: "JA-09821",
      testName: "Magnetic Resonance Imaging (MRI) ",
      date: "15-Apr-2021",
      code: "5792-7",
      range: "Normal",
      resultValue: "9.3",
    },
    {
      apmntID: "JA-09821",
      testName: "Magnetic Resonance Imaging (MRI) ",
      date: "15-Apr-2021",
      code: "5792-7",
      range: "Normal",
      resultValue: "9.3",
    },
    {
      apmntID: "JA-09821",
      testName: "Magnetic Resonance Imaging (MRI) ",
      date: "15-Apr-2021",
      code: "5792-7",
      range: "Normal",
      resultValue: "9.3",
    },
    {
      apmntID: "JA-09821",
      testName: "Magnetic Resonance Imaging (MRI) ",
      date: "15-Apr-2021",
      code: "5792-7",
      range: "Normal",
      resultValue: "9.3",
    },
  ];
  const columns = [
    {
      name: "Apmnt ID",
      selector: "apmntID",
    },
    {
      name: "Test Name",
      selector: "testName",
    },
    {
      name: "Date",
      selector: "date",
    },
    {
      name: "Loinic code",
      selector: "code",
    },
    {
      name: "Range",
      selector: "range",
    },
    {
      name: "Result Value",
      selector: "resultValue",
    },
    {
      name: "Attachment",
      cell: (row) => (
        <div>
          <button className="btn btn-outline-secondary text-dark">View</button>
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Edit size="20" className="text-muted" />
          <Delete size="20" className="mx-2 text-danger" />
        </div>
      ),
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "14px",
        fontWeight: "bold",
        border: "none",
      },
    },
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };
  return (
    <div className="card p-3 mt-4 rounded border-0">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex my-2">
          <h6 className="title m-0">Tests</h6>
          <h6 className="sub-title m-0 mx-4">Past Tests</h6>
        </div>
      </div>
      <div className="border-top my-3"></div>
      <DataTable columns={columns} data={tableData} customStyles={customStyles} />
    </div>
  );
};

export default TestsTable;
