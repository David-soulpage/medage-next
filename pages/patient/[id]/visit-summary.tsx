import React from "react";
//local components
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";
import { CommonCard } from "@components/card";
import { VisitTable } from "@components/tables";
// react bootstrap
import { Form, InputGroup } from "react-bootstrap";
//icons
import { Search } from "@styled-icons/bootstrap";
//lodash
import _ from "lodash";

const VisitSummary = () => {
  const problems = [
    "Knee pain",
    "Abdominal pain",
    "Joints pain",
    "Head Ache",
    "Immunization",
    "Knee pain",
    "Abdominal pain",
    "Joints pain",
    "Head Ache",
    "Immunization",
  ];
  return (
    <PatientDashboardLayout>
      <div className="container pt-2">
        <h6 className="fw-bold">Visit Summary</h6>
        <CommonCard>
          <div className="d-flex align-items-center">
            <h6 className="fw-bold m-0">Visits</h6>
            <div className="ms-auto">
              <InputGroup className="bg-light d-flex align-items-center rounded px-2">
                <Form.Control placeholder="Search Problem" className="border-0 me-1 bg-light" />
                <InputGroup.Append>
                  <Search size="20" />
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
          {/* Visit Table */}
          <div className="mt-4">
            <VisitTable />
            <div className="d-flex justify-content-end mt-3">
              <small className="text-primary">View All</small>
            </div>
          </div>
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};

export default VisitSummary;
