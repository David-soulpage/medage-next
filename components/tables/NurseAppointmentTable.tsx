import { FC } from "react";

import DataTable from "react-data-table-component";
import { Delete, Edit, EyeFill } from "components/styled-icons";

const NurseAppointmentTable: FC = () => {
  // Sample Table Data
  const tableData = [
    {
      time: "01:15 PM",
      date: "26/05/2021",
      patientName: "Shanewarne",
      phoneNumber: "99-999-87778",
      doctor: "John Deo",
    },
    {
      time: "01:15 PM",
      date: "26/05/2021",
      patientName: "Shanewarne",
      phoneNumber: "99-999-87778",
      doctor: "John Deo",
    },
    {
      time: "01:15 PM",
      date: "26/05/2021",
      patientName: "Shanewarne",
      phoneNumber: "99-999-87778",
      doctor: "John Deo",
    },
    {
      time: "01:15 PM",
      date: "26/05/2021",
      patientName: "Shanewarne",
      phoneNumber: "99-999-87778",
      doctor: "John Deo",
    },
    {
      time: "01:15 PM",
      date: "26/05/2021",
      patientName: "Shanewarne",
      phoneNumber: "99-999-87778",
      doctor: "John Deo",
    },
    {
      time: "01:15 PM",
      date: "26/05/2021",
      patientName: "Shanewarne",
      phoneNumber: "99-999-87778",
      doctor: "John Deo",
    },
  ];
  // Header for each Column
  const columns = [
    {
      name: "Time",
      selector: "time",
    },
    {
      name: "Date",
      selector: "date",
    },
    {
      name: "Patient Name",
      selector: "patientName",
    },
    {
      name: "Phone Number",
      selector: "phoneNumber",
    },
    {
      name: "Doctor",
      selector: "doctor",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <Edit size="20" className="text-muted me-2" />
          <Delete size="20" className="text-danger " />
        </div>
      ),
    },
    {
      name: "Appointment Status",
      cell: (row) => (
        <button className="btn btn-sm bg-light-primary text-primary">Start Appointment</button>
      ),
      width: "200px",
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

export default NurseAppointmentTable;
