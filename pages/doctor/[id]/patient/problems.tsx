// react
import React, { useState } from "react";
// next
import Head from "next/head";
//react bootstrap
import { Modal, Form } from "react-bootstrap";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { ProblemsTable, SummaryTable } from "components/tables";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";
import { CommonModal } from "components/modal";

const Problems = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  const toggle = () => {
    setView(!view);
  };

  return (
    <>
      <Head>
        <title>Problems</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container">
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
                      Active Problems
                    </h6>
                    <h6 className="m-0 mx-4 cr-p" onClick={toggle}>
                      Longitudinal View
                    </h6>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm ms-auto"
                    onClick={() => setShow(true)}
                  >
                    + Add Problem
                  </button>
                </div>
                <div className="my-3"></div>
                {view ? <SummaryTable /> : <ProblemsTable />}
              </CommonCard>
            </div>
          </div>
          <CommonModal show={show} onHide={() => setShow(false)} centered={true}>
            <Modal.Header className="d-flex justify-content-center">
              <h6 className="title m-0">Enter Problem</h6>
            </Modal.Header>
            <Modal.Body className="p-3">
              <Form.Group className="d-flex align-items-center mt-3">
                <small className="m-0 w-25">Problem</small>
                <Form.Control placeholder="Search Dropdown" className="mx-3 w-75" />
              </Form.Group>
              <Form.Group className="d-flex align-items-center mt-3">
                <small className="m-0 w-25">Status</small>
                <div className="w-75">
                  <input type="radio" id="acitve" className="mx-3" />
                  <small>Active</small>
                  <input type="radio" id="acitve" className="mx-3" />
                  <small>Inactive</small>
                </div>
              </Form.Group>
              <Form.Group className="d-flex align-items-center mt-3">
                <small className="m-0 w-25">ICD 10 Code</small>
                <Form.Control placeholder="Enter code" className="mx-3 w-75" />
              </Form.Group>
              <Form.Group className="d-flex align-items-center mt-3">
                <small className="m-0 w-25">SNOMED CT Code</small>
                <Form.Control placeholder="Enter CT code" className="mx-3 w-75" />
              </Form.Group>
              <Form.Group className="d-flex align-items-center mt-3">
                <small className="m-0 w-25">Date Time Onset</small>
                <Form.Control placeholder="Date Time Onset" className="mx-3 w-75" />
              </Form.Group>
              <Form.Group className="d-flex align-items-start mt-3">
                <small className="m-0 w-25">Notes</small>
                <Form.Control as="textarea" rows={4} className="mx-3 w-75" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="bg-secondary d-flex justify-content-end">
              <button
                className="btn btn-outline-secondary text-dark"
                onClick={() => setShow(false)}
              >
                Close
              </button>
              <button className="btn btn-primary text-white">Save</button>
            </Modal.Footer>
          </CommonModal>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Problems;
