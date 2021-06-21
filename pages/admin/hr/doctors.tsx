import React, { useState } from "react";
//local components
import { CommonCard } from "components/card";
import { DoctorsList } from "components/tables";
//react bootstrap
import { Form, Modal } from "react-bootstrap";
//icons
import { AddCircle } from "components/styled-icons";
//forms
import { AddDoctorForm } from "components/forms";
//layout
import { AdminLayout } from "layouts";

const Doctors = () => {
  const [show, setShow] = useState(false);

  const initialValues = {
    category: "",
    code: "",
    manufacturer: "",
    expiration: "",
    quantity: "",
    cost: "",
    option: "",
  };

  return (
    <AdminLayout>
      <CommonCard>
        <div className="border-bottom py-3">
          <h6>Doctors</h6>
        </div>
        <div className="d-flex align-items-center mt-3">
          <div>
            <Form.Control placeholder="Search Doctor" />
          </div>
          <div className="ms-auto">
            <button
              className="btn btn-sm btn-primary text-white d-flex align-items-center"
              onClick={() => setShow(true)}
            >
              <AddCircle size="20" /> Add Doctor
            </button>
          </div>
        </div>
        <div className="mt-3">
          <DoctorsList />
        </div>
      </CommonCard>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <h6>Add Product</h6>
        </Modal.Header>
        <Modal.Body>
          <AddDoctorForm />
        </Modal.Body>
        <Modal.Footer className="bg-light d-flex justify-content-start">
          <button className="btn btn-sm">Cancel</button>
          <button className="btn btn-sm btn-primary text-white">Add</button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
};

export default Doctors;
