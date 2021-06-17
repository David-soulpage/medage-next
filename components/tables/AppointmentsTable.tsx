import React, { FC } from "react";
//React data table
import DataTable from "react-data-table-component";
//icons
import { Edit, EyeFill } from "components/styled-icons";

const AppointmentsTable: FC = () => {
  const data = [
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
    {
      scheduledTime: "Mon Apr 29, 2021 10 AM",
      provider: "Christopher John MD",
      reason: "General Visit",
      office: "Primary Office",
      examRoom: "Exam 1",
      address: "Not Provided",
      status: "None",
      profile: "None",
    },
  ];
  const columns = [
    {
      name: "Scheduled Time",
      selector: "scheduledTime",
    },
    {
      name: "Provider",
      selector: "provider",
    },
    {
      name: "Reason",
      selector: "reason",
    },
    {
      name: "Office",
      selector: "office",
    },
    {
      name: "Exam Room",
      selector: "examRoom",
    },
    {
      name: "Address",
      selector: "address",
    },
    {
      name: "Appoinrment Status",
      selector: "status",
    },
    {
      name: "Profile",
      selector: "profile",
    },
    {
      name: "Report",
      cell: (row) => (
        <div>
          <Edit style={{ height: "20px" }} className="text-dark" />
          <EyeFill style={{ height: "20px" }} className="text-dark" />
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
  return <DataTable columns={columns} data={data} customStyles={customStyles} />;
};

export default AppointmentsTable;
