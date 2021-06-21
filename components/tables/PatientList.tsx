import React from "react";
//react data table
import DataTable from "react-data-table-component";
//router
import { useRouter } from "next/router";

const PatientList = () => {
  const router = useRouter();
  const tableData = [
    {
      patientId: "1000752",
      name: "Shane Warne",
      activeProblem: "Cold Flu",
      doctor: "John Doe",
      contactNo: "040-2012011",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      activeProblem: "Cold Flu",
      doctor: "John Doe",
      contactNo: "040-2012011",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      activeProblem: "Cold Flu",
      doctor: "John Doe",
      contactNo: "040-2012011",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      activeProblem: "Cold Flu",
      doctor: "John Doe",
      contactNo: "040-2012011",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      activeProblem: "Cold Flu",
      doctor: "John Doe",
      contactNo: "040-2012011",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      activeProblem: "Cold Flu",
      doctor: "John Doe",
      contactNo: "040-2012011",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      activeProblem: "Cold Flu",
      doctor: "John Doe",
      contactNo: "040-2012011",
    },
  ];

  const columns = [
    {
      name: "Patient Id",
      selector: "patientId",
    },
    {
      name: "Patient Name",
      selector: "name",
    },
    {
      name: "Active Problem",
      selector: "activeProblem",
    },
    {
      name: "Doctor",
      selector: "doctor",
    },
    {
      name: "Contact No",
      selector: "contactNo",
    },
  ];
  // Table Styles
  const customStyles = {
    headCells: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "14px",
        border: "none",
        fontWeight: "700",
      },
    },
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "16px",
        color: "#44444f",
        cursor: "pointer",
      },
    },
  };

  const handleRowClicked = (row) => {
    router.push("patient-summary");
  };
  return (
    <DataTable
      noHeader
      columns={columns}
      onRowClicked={handleRowClicked}
      data={tableData}
      customStyles={customStyles}
      highlightOnHover
    />
  );
};

export default PatientList;
