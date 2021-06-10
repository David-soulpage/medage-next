// react
import React, { FC, useState } from "react";
//react bootstrap
import { Modal, Form } from "react-bootstrap";
// react-data-table-component
import DataTable from "react-data-table-component";
// components
import { CommonModal } from "components/modal";
// icons
import { Edit } from "@styled-icons/material";
import { Delete } from "@styled-icons/fluentui-system-regular";

const ProblemsTable: FC = () => {
  const [show, setShow] = useState(false);
  const tableData = [
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
    {
      aptmntId: "JA-09821",
      problem: "Headcche",
      status: "acitve",
      codeSystem: "ICD-10",
      code: "G43,909",
      snomed: "3779609",
      date: "Sept 1, 2020, 11: 00 am",
    },
  ];
  const columns = [
    {
      name: "Aptmnt ID",
      selector: "aptmntId",
    },
    {
      name: "Problem",
      selector: "problem",
    },
    {
      name: "Status",
      selector: "status",
    },
    {
      name: "Code System",
      selector: "codeSystem",
    },
    {
      name: "ICM-CM Code",
      selector: "code",
    },
    {
      name: "Snomed",
      selector: "snomed",
    },
    {
      name: "Date Diagnosed",
      selector: "date",
    },

    {
      name: "Report",
      cell: (row) => (
        <div>
          <Edit size="20" className="text-muted" />
          <Delete size="20" className="mx-2 text-danger" />
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
        border: "none",
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
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <h6 className="title m-0">Active Problems</h6>
          <h6 className="sub-title m-0 mx-4">Inactive Problems</h6>
        </div>
        <button className="btn btn-outline-primary btn-sm" onClick={() => setShow(true)}>
          + Add Problem
        </button>
      </div>
      <div className="border-top my-3"></div>
      <DataTable columns={columns} data={tableData} customStyles={customStyles} />
      <CommonModal show={show} onHide={() => setShow(false)} centered={true}>
        <Modal.Header className="d-flex justify-content-center">
          <h6 className="title m-0">Enter Problem</h6>
        </Modal.Header>
        <Modal.Body className="p-3">
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25">Problem</small>
            <Form.Control placeholder="Search Dropdown" className="mx-3 w-75" />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25">Status</small>
            <div className="w-75">
              <input type="radio" id="acitve" className="mx-3" />
              <small>Active</small>
              <input type="radio" id="acitve" className="mx-3" />
              <small>Inactive</small>
            </div>
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25">ICD 10 Code</small>
            <Form.Control placeholder="Enter code" className="mx-3 w-75" />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25">SNOMED CT Code</small>
            <Form.Control placeholder="Enter CT code" className="mx-3 w-75" />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25">Date Time Onset</small>
            <Form.Control placeholder="Date Time Onset" className="mx-3 w-75" />
          </Form.Group>
          <Form.Group className="d-flex align-items-start">
            <small className="m-0 w-25">Notes</small>
            <Form.Control as="textarea" rows={4} className="mx-3 w-75" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="bg-secondary d-flex justify-content-center">
          <button className="btn btn-outline-secondary text-dark" onClick={() => setShow(false)}>
            Close
          </button>
          <button className="btn btn-primary text-white">Save</button>
        </Modal.Footer>
      </CommonModal>
    </>
  );
};

export default ProblemsTable;
