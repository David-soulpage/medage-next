import React, { FC, useState } from "react";
//local component
import DataTable from "react-data-table-component";
import { CommonModal } from "components/modal";
//icons
import { Edit } from "components/styled-icons";
import { Delete } from "components/styled-icons";
//react bootstrap
import { Modal, Form } from "react-bootstrap";

const AllergiesTable: FC = () => {
  const [show, setShow] = useState(false);

  const tableData = [
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
    {
      normCode: "RX10359383",
      allergy: "Class of drugs: sulfa drug",
      reaction: "Shortness of breath/difficulty breathing",
      severity: "Mild",
      status: "Active",
      updated: "04/04/2021",
    },
  ];
  const columns = [
    {
      name: "Rx Norm Code",
      selector: "normCode",
    },
    {
      name: "Allergy",
      selector: "allergy",
    },
    {
      name: "Reaction",
      selector: "reaction",
    },
    {
      name: "Severity",
      selector: "severity",
    },
    {
      name: "Status",
      selector: "status",
    },
    {
      name: "Updated",
      selector: "updated",
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
    headRow: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "14px",
        border: "none",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };
  return (
    <div className="card p-3 mt-4 rounded border-0">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex my-4">
          <h6 className="title m-0">Active Allergies</h6>
          <h6 className="sub-title m-0 mx-4">Inactive Allergies</h6>
        </div>
        <button className="btn btn-outline-primary btn-sm" onClick={() => setShow(true)}>
          + Add Allergies
        </button>
      </div>
      <div className="border-top my-3"></div>
      {/* Table */}
      <DataTable columns={columns} data={tableData} customStyles={customStyles} />
      {/* Modal */}
      <CommonModal show={show} onHide={() => setShow(false)} centered={true}>
        <Modal.Header className="d-flex justify-content-center">
          <h6 className="title m-0">Add New Allergy</h6>
        </Modal.Header>
        <Modal.Body className="p-3">
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25 title">Allergy Name</small>
            <Form.Control placeholder="Enter Allergy name here" className="mx-3 w-75" />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25 title">Allergy Type</small>
            <Form.Control placeholder="Select from list" className="mx-3 w-75" />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25 title">Severity</small>
            <Form.Control placeholder="Select from list" className="mx-3 w-75" />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <small className="m-0 w-25 title">Status</small>
            <div className="w-75">
              <input type="radio" id="acitve" className="mx-3" />
              <small>Active</small>
              <input type="radio" id="acitve" className="mx-3" />
              <small>Inactive</small>
            </div>
          </Form.Group>
          <Form.Group className="d-flex align-items-start">
            <small className="m-0 w-25 title">Reaction</small>
            <Form.Control as="textarea" rows={4} className="mx-3 w-75" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="bg-secondary d-flex justify-content-center">
          <button className="btn btn-outline-secondary text-dark">Close</button>
          <button className="btn btn-primary text-white">Save</button>
        </Modal.Footer>
      </CommonModal>
    </div>
  );
};

export default AllergiesTable;
