// react
import React, { FC } from "react";
// boostrap
import { InputGroup, Form } from "react-bootstrap";
// react-data-table-component
import DataTable from "react-data-table-component";

// Link
import Link from "next/link";
//styled-icons
// icons
import { Attachment } from "components/styled-icons";
import { Search } from "components/styled-icons";

const StudyListTable: FC = () => {
  const tableData = [
    {
      priority: 1,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
    },
    {
      priority: 3,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
    },
    {
      priority: 1,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
    },
    {
      priority: 3,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      studyId: 1991881,
      scanType: "MRI",
      attachments: 2,
    },
  ];
  const headers = Object.keys(tableData[0]);
  const columns = [
    {
      name: "",
      selector: "priority",
      cell: (row) => <div>!!</div>,
      wrap: false,
    },
    {
      name: "Patient ID",
      selector: "patientId",
      wrap: false,
    },
    {
      name: "Patient Name",
      selector: "patientName",
      wrap: false,
    },
    {
      name: "Study ID",
      selector: "studyId",
      wrap: false,
    },
    {
      name: "Scan Type",
      selector: "scanType",
      wrap: false,
    },
    {
      name: "Attachments",
      selector: "attachments",
      cell: (row) => (
        <div className="px-3">
          <Attachment size="15" /> 0{row.attachments}
        </div>
      ),
      wrap: false,
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
        width: "15%",
      },
    },
  };

  return (
    <div className="card p-3 border-0 rounded h-100">
      {/* Study List Header */}
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h6 className="fw-bold text-base-black mb-0 me-3">Study List</h6>
          <Link href="/radiology/add-new-study">
            <button className="btn btn-outline-primary">Upload New Study</button>
          </Link>
        </div>
        <div>
          <InputGroup className="bg-secondary px-2 rounded mt-4 mt-md-0 d-flex align-items-center br-10">
            <Form.Control
              placeholder="Search  by ID, Name"
              className="border-0 bg-secondary me-2 font-smaller"
            />
            <InputGroup.Append>
              <Search size="20" />
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
      {/* Study List Table */}
      <div>
        <DataTable columns={columns} data={tableData} customStyles={customStyles} />
      </div>
      {/* View All */}
      <div className="ms-auto mt-3">
        <Link href="/radiology/study  ">
          <h6 className="text-primary ">View All</h6>
        </Link>
      </div>
    </div>
  );
};

export default StudyListTable;
