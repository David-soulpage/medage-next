import React from "react";
import DataTable from "react-data-table-component";

const NursePatientList = () => {
  const tableData = [
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
    },
    {
      patientId: "1000752",
      name: "Shane Warne",
      doctor: "John Doe",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medications: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place..",
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
      name: "Doctor",
      selector: "doctor",
    },
    {
      name: "Date",
      selector: "date",
    },
    {
      name: "Pharmacy",
      selector: "pharmacy",
    },
    {
      name: "Medications",
      selector: "medications",
    },
    {
      name: "Description",
      selector: "description",
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

export default NursePatientList;
