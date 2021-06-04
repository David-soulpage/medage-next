import React, { FC } from "react";
import _ from "lodash";
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
      selector: "status",
    },
    {
      name: "Report",
      cell: (row) => (
        <div>
          <button className="btn btn-outline-dark btn-sm text-muted">View</button>{" "}
        </div>
      ),
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
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "74px",
        fontSize: "16px",
      },
    },
  };
  return (
    <div>
      <DataTable columns={columns} data={tableData} customStyles={customStyles} />
    </div>
  );
};

export default ReportsTable;
