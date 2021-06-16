// react
import { Delete } from "@styled-icons/fluentui-system-regular";
import { Edit } from "@styled-icons/material";
import React, { FC } from "react";
//local component
import DataTable from "react-data-table-component";

const NurseList: FC = () => {
  const tableData = [
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
    {
      name: "John Deo",
      department: "Outpatient",
      specialization: "Clinical Nurse",
      time: "10:00 AM-01:00 PM",
      location: "Loremipsum",
      examRoom: "01",
    },
  ];
  const columns = [
    {
      name: "Nurse Name",
      selector: "name",
    },
    {
      name: "Department",
      selector: "department",
    },
    {
      name: "Specialization",
      selector: "specialization",
    },
    {
      name: "Time of Office",
      selector: "time",
    },
    {
      name: "Location",
      selector: "location",
    },
    {
      name: "Exam Room",
      selector: "examRoom",
    },
    {
      name: "Attachments",
      cell: (row) => (
        <div>
          <Edit size="20" className="text-muted" />
          <Delete size="20" className="ms-2 text-danger" />
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
        borderBottom: "1px solid #ECECF2",
        borderTop: "1px solid #ECECF2",
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

export default NurseList;
