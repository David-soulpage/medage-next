import React from "react";
//react bootstrap
import { Form } from "react-bootstrap";
//icons

const AddDoctorForm = () => {
  return (
    <div>
      <div className="row gy-4">
        <div className="col-6">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control placeholder="Enter Here" />
        </div>
        <div className="col-6">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="Enter Here" />
        </div>

        <div className="col-6">
          <Form.Label>Age</Form.Label>
          <Form.Control placeholder="54" />
        </div>
        <div className="col-6">
          <Form.Label>Gender</Form.Label>
          <Form.Control placeholder="Male" />
        </div>
        <div className="col-6">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Enter Here" />
        </div>
        <div className="col-6">
          <Form.Label>Skills</Form.Label>
          <Form.Control placeholder="Enter Here" />
        </div>
        <div className="col-12">
          <Form.Control placeholder="Enter Here" as="textarea" rows={4} />
        </div>
      </div>
    </div>
  );
};

export default AddDoctorForm;
