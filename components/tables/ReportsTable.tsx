import React, { FC } from "react";

import DataTable from "react-data-table-component";

const ReportsTable: FC = () => {
  const tableData = [
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
    {
      aptmntId: "JA-09821",
      name: "Shane Warne",
      diagnosis: "Diagnosis",
      provider: "Vijaya Diagnostics",
      findings: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
      status: "acitve",
    },
  ];
  const columns = [
    {
      name: "Aptmnt ID",
      selector: "aptmntId",
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
      name: "Date Diagnosed",
      selector: "date",
    },
    {
      name: "Status",
      cell: (row) => <div className="text-success">{row.status}</div>,
    },
    {
      name: "Report",
      cell: (row) => (
        <div>
          <button className="btn btn-sm text-primary bg-light-primary border border-primary">
            View
          </button>{" "}
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
    <div>
      <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />
    </div>
  );
};

export default ReportsTable;
