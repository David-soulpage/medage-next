import React, { FC, useState } from "react";
//local component
import DataTable from "react-data-table-component";

//icons
import { Edit } from "components/styled-icons";
import { Delete } from "components/styled-icons";

const AllergiesTable: FC = () => {
  const tableData = [
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
  ];
  const columns = [
    {
      name: "Rx Norm Code",
      selector: "normCode",
    },
    {
      name: "Allergy",
      selector: "allergy",
    },
    {
      name: "Reaction",
      selector: "reaction",
    },
    {
      name: "Severity",
      selector: "severity",
    },
    {
      name: "Status",
      selector: "status",
    },
    {
      name: "Updated",
      selector: "updated",
    },
    {
      name: "Report",
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

export default AllergiesTable;
