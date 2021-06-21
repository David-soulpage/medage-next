// react
import React, { useState } from "react";
import Head from "next/head";
// components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { AllergiesTable } from "components/tables";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";
import { CommonModal } from "components/modal";
//react bootstrap
import { Modal, Form } from "react-bootstrap";

const Allergies = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>Allergies</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          {/* Patient Details */}
          <div className="row g-3">
            <div className="col-12">
              <CommonCard>
                <PatientDetailsSmall />
              </CommonCard>
            </div>
            <div className="col-12">
              <CommonCard>
                <div className="d-flex align-items-center border-bottom">
                  <div className="d-flex h-100">
                    <h6 className="m-0 border-primary border-bottom cr-p">Active Allergies</h6>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm ms-auto"
                    onClick={() => setShow(true)}
                  >
                    + Add Allergy
                  </button>
                </div>
                <div className="mt-3">
                  <AllergiesTable />
                </div>
              </CommonCard>
            </div>
          </div>
          <CommonModal show={show} onHide={() => setShow(false)} centered={true}>
            <Modal.Header className="d-flex justify-content-center">
              <h6 className="title m-0">Add New Allergy</h6>
            </Modal.Header>
            <Modal.Body className="p-3">
              <Form.Group>
                <Form.Label>Allergy Name</Form.Label>
                <Form.Control placeholder="Enter Allergy name here" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Allergy Type</Form.Label>
                <Form.Control placeholder="Select from list" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Severity</Form.Label>
                <Form.Control placeholder="Select from list" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <div>
                  <input type="radio" id="acitve" />
                  <small>Active</small>
                  <input type="radio" id="acitve" className="ms-3" />
                  <small>Inactive</small>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Reaction</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="bg-secondary d-flex justify-content-center">
              <button className="btn btn-outline-secondary text-dark">Close</button>
              <button className="btn btn-primary text-white">Save</button>
            </Modal.Footer>
          </CommonModal>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Allergies;
