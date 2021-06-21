// react
import React, { FC } from "react";
// react-data-table-component
import DataTable from "react-data-table-component";
//styled-icons
import { Edit } from "components/styled-icons";
import { Delete } from "components/styled-icons";

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
          <button className="btn btn-sm bg-light-primary text-primary border border-primary">
            View
          </button>
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

export default TestsTable;
