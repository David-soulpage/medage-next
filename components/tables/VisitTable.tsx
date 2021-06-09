import React from "react";
//react data table
import DataTable from "react-data-table-component";

const VisitTable = () => {
  const tableData = [
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
    {
      problem: "Cold Flu",
      status: "Active",
      doctor: "John Deo",
      date: "04/04/2021",
      pharmacy: "Mixlab 24/7",
      medication: "Annaxicillan 500 mg",
      description: "Lorem ipsum is place...",
    },
  ];

  const columns = [
    {
      name: "Problem",
      selector: "problem",
    },
    {
      name: "Status",
      selector: "status",
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
      name: "Medication",
      selector: "medication",
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
      },
    },
  };
  return <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />;
};

export default VisitTable;
