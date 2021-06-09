// react
import React, { FC } from "react";
//local components
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";
import { CommonCard } from "@components/card";
// react bootstrap
import { Form, InputGroup } from "react-bootstrap";
//icons
import { Search } from "@styled-icons/bootstrap";
//lodash
import _ from "lodash";

interface Iprops {
  onPressForm: () => void;
}

const ProblemListStepOne: FC<Iprops> = (props) => {
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
    <div className="container pt-2">
      <h6 className="fw-bold m-0">Select problem</h6>
      <div className="row">
        <div className="col-12 col-md-4">
          <InputGroup className="border-1 border mt-4 d-flex align-items-center rounded px-2">
            <Form.Control placeholder="Search Problem" className="border-0 me-1" />
            <InputGroup.Append>
              <Search size="20" />
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
      <div className="row mt-4 g-4">
        {_.map(problems, (problem, id) => (
          <div key={id} className="col-2">
            <div className="border rounded p-2 shadow-sm text-muted text-center">{problem}</div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 col-md-2">
          <button
            className="btn btn-sm text-white btn-primary w-100 mt-3"
            onClick={props.onPressForm}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemListStepOne;
