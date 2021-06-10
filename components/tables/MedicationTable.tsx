// react
import React, { FC } from "react";
//local component
import DataTable from "react-data-table-component";
//styled-icons
import { Edit } from "components/styled-icons";
import { Delete } from "components/styled-icons";

const MedicationTable: FC = () => {
  const tableData = [
    {
      apmntID: "JA-09821",
      drugName: "Paracetimol",
      dose: "1-0-1",
      when: "Afrer Food",
      startDate: "15/01/2021",
      endDate: "15/02/2021",
      status: "Active",
    },
    {
      apmntID: "JA-09821",
      drugName: "Paracetimol",
      dose: "1-0-1",
      when: "Afrer Food",
      startDate: "15/01/2021",
      endDate: "15/02/2021",
      status: "Active",
    },
    {
      apmntID: "JA-09821",
      drugName: "Paracetimol",
      dose: "1-0-1",
      when: "Afrer Food",
      startDate: "15/01/2021",
      endDate: "15/02/2021",
      status: "Active",
    },
    {
      apmntID: "JA-09821",
      drugName: "Paracetimol",
      dose: "1-0-1",
      when: "Afrer Food",
      startDate: "15/01/2021",
      endDate: "15/02/2021",
      status: "Active",
    },
    {
      apmntID: "JA-09821",
      drugName: "Paracetimol",
      dose: "1-0-1",
      when: "Afrer Food",
      startDate: "15/01/2021",
      endDate: "15/02/2021",
      status: "Active",
    },
    {
      apmntID: "JA-09821",
      drugName: "Paracetimol",
      dose: "1-0-1",
      when: "Afrer Food",
      startDate: "15/01/2021",
      endDate: "15/02/2021",
      status: "Active",
    },
    {
      apmntID: "JA-09821",
      drugName: "Paracetimol",
      dose: "1-0-1",
      when: "Afrer Food",
      startDate: "15/01/2021",
      endDate: "15/02/2021",
      status: "Active",
    },
  ];
  const columns = [
    {
      name: "Apmnt ID",
      selector: "apmntID",
    },
    {
      name: "Drug Name",
      selector: "drugName",
    },
    {
      name: "Dose",
      selector: "dose",
    },
    {
      name: "When",
      selector: "when",
    },
    {
      name: "Start Date",
      selector: "startDate",
    },
    {
      name: "End Date",
      selector: "endDate",
    },
    {
      name: "Pharmacy Notes",
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
        height: "60px",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };
  return <DataTable columns={columns} data={tableData} customStyles={customStyles} />;
};

export default MedicationTable;
