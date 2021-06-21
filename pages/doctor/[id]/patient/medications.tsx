// next
import React, { useState } from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { MedicationTable, SummaryTable } from "components/tables";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";
import { CommonModal } from "components/modal";
//react bootstrap
import { Modal, Form } from "react-bootstrap";

const Medications = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  const toggle = () => {
    setView(!view);
  };
  return (
    <>
      <Head>
        <title>Medications</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container mt-2">
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
                    <h6 className="m-0 border-primary border-bottom cr-p" onClick={toggle}>
                      Active Medications
                    </h6>
                    <h6 className="ms-3 cr-p" onClick={toggle}>
                      Longitudinal View
                    </h6>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm ms-auto"
                    onClick={() => setShow(true)}
                  >
                    + Add Medication
                  </button>
                </div>
                <div className="mt-3">{view ? <SummaryTable /> : <MedicationTable />}</div>
              </CommonCard>
            </div>
          </div>
          <CommonModal show={show} onHide={() => setShow(false)} centered={true}>
            <Modal.Header className="d-flex justify-content-center">
              <h6 className="title m-0">Add Medication</h6>
            </Modal.Header>
            <Modal.Body className="p-3">
              <Form.Group>
                <Form.Label>Drug Name</Form.Label>
                <Form.Control placeholder="Enter Allergy name here" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Drug Type</Form.Label>
                <Form.Control placeholder="Select from list" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Dose</Form.Label>
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
                <Form.Label>Additional Info</Form.Label>
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

export default Medications;
