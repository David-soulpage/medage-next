import React from "react";
//react data table
import DataTable from "react-data-table-component";
//icons
import { Printer } from "components/styled-icons";

const NurseReportsTable = () => {
  const tableData = [
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
    {
      aptmntID: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Punch Biopsy",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      dateDiagnosed: "Sept 1, 2020, 11: 00 am",
      status: "Active",
    },
  ];

  const columns = [
    {
      name: "Aptmn Id",
      selector: "aptmntID",
    },
    {
      name: "Name",
      selector: "name",
    },
    {
      name: "Diagnosis",
      selector: "diagnosis",
    },
    {
      name: "Provider",
      selector: "provider",
    },
    {
      name: "Findings",
      selector: "findings",
    },
    {
      name: "Date Diagnoesd",
      selector: "dateDiagnosed",
    },
    {
      name: "Status",
      cell: (row) => <div className="text-success">{row.status}</div>,
    },
    {
      name: "Reports",
      cell: (row) => (
        <div>
          <button className="btn btn-sm bg-light-primary text-primary border border-primary">
            View
          </button>
          <Printer size="20" className="ms-3" />
        </div>
      ),
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

export default NurseReportsTable;
