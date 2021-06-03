import React, { FC } from "react";
// lodash
import _ from "lodash";
// data -table
import DataTable from "react-data-table-component";
// icons
import { Attachment } from "@styled-icons/entypo";
import { Copy } from "@styled-icons/boxicons-solid";

const StudyList: FC = () => {
  const tableData = [
    {
      priority: 1,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
      reportedBy: "Dr. Micheal",
      reportedDate: "04/19/2021",
      description: "Lorem ipsum wi",
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
      reportedBy: "Dr. Micheal",
      reportedDate: "04/19/2021",
      description: "Lorem ipsum wi",
    },
    {
      priority: 3,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
      reportedBy: "Dr. Micheal",
      reportedDate: "04/19/2021",
      description: "Lorem ipsum wi",
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
      reportedBy: "Dr. Micheal",
      reportedDate: "04/19/2021",
      description: "Lorem ipsum wi",
    },
    {
      priority: 1,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
      reportedBy: "Dr. Micheal",
      reportedDate: "04/19/2021",
      description: "Lorem ipsum wi",
    },
    {
      priority: 3,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
      reportedBy: "Dr. Micheal",
      reportedDate: "04/19/2021",
      description: "Lorem ipsum wi",
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
      reportedBy: "Dr. Micheal",
      reportedDate: "04/19/2021",
      description: "Lorem ipsum wi",
    },
  ];
  const headers = Object.keys(tableData[0]);
  const columns = [
    {
      name: "Priority",
      selector: "priority",
      cell: (row) => <div>!!</div>,
    },
    {
      name: "Patient ID",
      selector: "patientId",
    },
    {
      name: "Patient Name",
      selector: "patientName",
    },
    {
      name: "Study ID",
      selector: "studyId",
    },
    {
      name: "Scan Type",
      selector: "scanType",
    },
    {
      name: "Attachments",
      selector: "attachments",
      cell: (row) => (
        <div className="d-flex align-items-center">
          <Attachment className=" text-light-purple me-3" size="15" />
          <small className="me-4">{row.attachments}</small>
          <Copy className="text-light-purple me-3" size="15" />
          <small>{row.attachments}</small>
        </div>
      ),
    },
    {
      name: "Reported By",
      selector: "reportedBy",
    },
    {
      name: "Reported Date",
      selector: "reportedDate",
    },
    {
      name: "Description",
      selector: "description",
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "16px",

        fontFamily: "poppinsRegular",
        border: "none",
      },
    },
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "74px",
        fontFamily: "poppinsRegular",
        fontSize: "14px",
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "600",
      },
    },
  };
  return <DataTable columns={columns} data={tableData} customStyles={customStyles} />;
};
export default StudyList;
