// react
import React, { FC } from "react";
// components
import CommonTable from "components/tables/CommonTable";
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
// styled-icons
import { Star } from "components/styled-icons";
import { AccountBox } from "components/styled-icons";
import { VideoCall } from "components/styled-icons";
import { ThreeDotsVertical } from "components/styled-icons/";

interface IProps {}

const list = [
  {
    doctorName: "Dr. Sara Graham",
    visitType: "Video Visit",
    sessionStartedAt: "Starts at 3:00PM",
    sessionEndedAt: "Ends at 4:00PM",
    date: "Wednesday , May 11, 2021 ",
    options: "",
  },
  {
    doctorName: "Dr. Sara Graham",
    visitType: "Video Visit",
    sessionStartedAt: "Starts at 3:00PM",
    sessionEndedAt: "Ends at 4:00PM",
    date: "Wednesday , May 11, 2021 ",
    options: "",
  },
  {
    doctorName: "Dr. Sara Graham",
    visitType: "Video Visit",
    sessionStartedAt: "Starts at 3:00PM",
    sessionEndedAt: "Ends at 4:00PM",
    date: "Wednesday , May 11, 2021 ",
    options: "",
  },
  {
    doctorName: "Dr. Sara Graham",
    visitType: "Video Visit",
    sessionStartedAt: "Starts at 3:00PM",
    sessionEndedAt: "Ends at 4:00PM",
    date: "Wednesday , May 11, 2021 ",
    options: "",
  },
  {
    doctorName: "Dr. Sara Graham",
    visitType: "Video Visit",
    sessionStartedAt: "Starts at 3:00PM",
    sessionEndedAt: "Ends at 4:00PM",
    date: "Wednesday , May 11, 2021 ",
    options: "",
  },
  {
    doctorName: "Dr. Sara Graham",
    visitType: "Video Visit",
    sessionStartedAt: "Starts at 3:00PM",
    sessionEndedAt: "Ends at 4:00PM",
    date: "Wednesday , May 11, 2021 ",
    options: "",
  },
  {
    doctorName: "Dr. Sara Graham",
    visitType: "Video Visit",
    sessionStartedAt: "Starts at 3:00PM",
    sessionEndedAt: "Ends at 4:00PM",
    date: "Wednesday , May 11, 2021 ",
    options: "",
  },
];

const columns = [
  {
    name: "Doctor's Name",
    selector: "doctorName",
    cell: (row) => (
      <div className="d-flex align-items-center">
        <div className="me-2">
          <Star size="15" />
        </div>
        <div className="me-2">
          <AccountBox size={30} className="text-light-grey" />
        </div>
        <div>
          <small className="text-base-black font-smaller fw-bold ">{row["doctorName"]}</small>
        </div>
      </div>
    ),
  },

  {
    name: "Visit Type",
    selector: "visitType",
    cell: (row) => (
      <div className="d-flex align-items-center">
        <VideoCall size={20} className="text-green" />
        <div className="ms-4">
          <small className="text-base-black font-smaller">Video Visit</small>
        </div>
      </div>
    ),
  },
  {
    name: "Session Started At",
    selector: "sessionStartedAt",
    cell: (row) => (
      <small className="text-base-black font-smaller">{row["sessionStartedAt"]}</small>
    ),
    wrap: false,
  },
  {
    name: "Session Ended At",
    selector: "sessionEndedAt",
    cell: (row) => <small className="text-base-black font-smaller">{row["sessionEndedAt"]}</small>,
    wrap: false,
  },
  {
    name: "Date",
    selector: "date",
    cell: (row) => <small className="text-base-black font-smaller">{row["date"]}</small>,
    wrap: false,
  },

  {
    name: "",
    cell: (row) => <ThreeDotsVertical size={15} className="text-base-black" />,
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
    style: {
      minWidth: "300px",
    },
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

const PatientVisits: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      <div className="card p-4 mx-5">
        <CommonTable
          tableData={list}
          columns={columns}
          customStyles={customStyles}
          noHeader={true}
        />
      </div>
    </PatientDashboardLayout>
  );
};
export default PatientVisits;
