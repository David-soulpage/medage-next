// react
import React, { FC } from "react";
// components
import CommonTable from "components/tables/CommonTable";
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
// styled-icons
import { Pencil } from "components/styled-icons/";
import { Delete } from "components/styled-icons/";

interface IProps {}

const list = [
  {
    date: "04/04/2021",
    problem: "Cold Flu",
    status: "Active",
    doctor: "John Deo",
    medications: "Annaxicillan 500 mg ",
    actions: "",
  },
  {
    date: "04/04/2021",
    problem: "Cold Flu",
    status: "Active",
    doctor: "John Deo",
    medications: "Annaxicillan 500 mg ",
    actions: "",
  },
  {
    date: "04/04/2021",
    problem: "Cold Flu",
    status: "Active",
    doctor: "John Deo",
    medications: "Annaxicillan 500 mg ",
    actions: "",
  },
  {
    date: "04/04/2021",
    problem: "Cold Flu",
    status: "Active",
    doctor: "John Deo",
    medications: "Annaxicillan 500 mg ",
    actions: "",
  },
  {
    date: "04/04/2021",
    problem: "Cold Flu",
    status: "Active",
    doctor: "John Deo",
    medications: "Annaxicillan 500 mg ",
    actions: "",
  },
  {
    date: "04/04/2021",
    problem: "Cold Flu",
    status: "Active",
    doctor: "John Deo",
    medications: "Annaxicillan 500 mg ",
    actions: "",
  },
  {
    date: "04/04/2021",
    problem: "Cold Flu",
    status: "Active",
    doctor: "John Deo",
    medications: "Annaxicillan 500 mg ",
    actions: "",
  },
];

const columns = [
  {
    name: "Date",
    selector: "date",
    cell: (row) => <small className="text-base-black font-smaller">{row["date"]}</small>,
    wrap: false,
  },

  {
    name: "Problem",
    selector: "problem",
    cell: (row) => <small className="text-base-black font-smaller">{row["problem"]}</small>,
    wrap: false,
  },
  {
    name: "Status",
    selector: "status",
    cell: (row) => <small className="text-base-black font-smaller">{row["status"]}</small>,
    wrap: false,
  },
  {
    name: "Doctor",
    selector: "doctor",
    cell: (row) => <small className="text-base-black font-smaller">{row["doctor"]}</small>,
    wrap: false,
  },
  {
    name: "Medications",
    selector: "medications",
    cell: (row) => <small className="text-base-black font-smaller">{row["medications"]}</small>,
    wrap: false,
  },

  {
    name: "Action",
    cell: (row) => (
      <div className="d-flex flex-row align-items-center">
        <div className="me-2">
          {" "}
          <Pencil className="text-light-grey" size="20" />
        </div>
        <div>
          <Delete className="text-red" size="20" />
        </div>
      </div>
    ),
    wrap: false,
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
  cells: {
    style: {},
  },

  rows: {
    style: {
      borderRadius: "10px",
      border: "1px solid #ECECF2",
      marginTop: "5px",
      height: "60px",
      fontSize: "16px",
    },
  },
};

const RecurringProblem: FC<IProps> = (props) => {
  return (
    <CommonTable tableData={list} columns={columns} customStyles={customStyles} noHeader={true} />
  );
};
export default RecurringProblem;
