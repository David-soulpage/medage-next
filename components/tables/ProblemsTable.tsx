// react
import React, { FC, useState } from "react";

// react-data-table-component
import DataTable from "react-data-table-component";

// icons
import { ThreeDotsVertical } from "components/styled-icons";

const ProblemsTable: FC = () => {
  const tableData = [
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
  ];
  const columns = [
    {
      name: "Aptmnt ID",
      selector: "aptmntId",
    },
    {
      name: "Problem",
      selector: "problem",
    },
    {
      name: "Status",
      selector: "status",
    },
    {
      name: "Code System",
      selector: "codeSystem",
    },
    {
      name: "ICM-CM Code",
      selector: "code",
    },
    {
      name: "Snomed",
      selector: "snomed",
    },
    {
      name: "Date Diagnosed",
      selector: "date",
    },

    {
      name: "Report",
      cell: (row) => (
        <div>
          <ThreeDotsVertical size="20" className="text-muted" />
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
  return (
    <>
      <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />
    </>
  );
};

export default ProblemsTable;
