// react
import React, { FC } from "react";
//local component
import DataTable from "react-data-table-component";

const DiagnosisTable: FC = () => {
  const tableData = [
    {
      apmntID: "JA-09821",
      date: "15-Apr-2021",
      reportName: "CT-PET Scan ",
      report: "125/95-mmHg/mmHg",
    },
    {
      apmntID: "JA-09821",
      date: "15-Apr-2021",
      reportName: "CT-PET Scan ",
      report: "125/95-mmHg/mmHg",
    },
    {
      apmntID: "JA-09821",
      date: "15-Apr-2021",
      reportName: "CT-PET Scan ",
      report: "125/95-mmHg/mmHg",
    },
    {
      apmntID: "JA-09821",
      date: "15-Apr-2021",
      reportName: "CT-PET Scan ",
      report: "125/95-mmHg/mmHg",
    },
    {
      apmntID: "JA-09821",
      date: "15-Apr-2021",
      reportName: "CT-PET Scan ",
      report: "125/95-mmHg/mmHg",
    },
    {
      apmntID: "JA-09821",
      date: "15-Apr-2021",
      reportName: "CT-PET Scan ",
      report: "125/95-mmHg/mmHg",
    },
  ];
  const columns = [
    {
      name: "Apmnt ID",
      selector: "apmntID",
    },
    {
      name: "Date",
      selector: "date",
    },
    {
      name: "Report Name",
      selector: "reportName",
    },
    {
      name: "Radiologist Report",
      selector: "report",
    },
    {
      name: "Doctor Comments",
      cell: (row) => (
        <div>
          <button className="btn btn-sm btn-outline-dark text-muted">View</button>
        </div>
      ),
    },
    {
      name: "Attachments",
      cell: (row) => (
        <div>
          <button className="btn btn-sm btn-outline-dark text-muted">View</button>
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
        border: "none",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };
  return <DataTable columns={columns} data={tableData} customStyles={customStyles} />;
};

export default DiagnosisTable;
