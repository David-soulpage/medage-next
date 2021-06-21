// react
import React, { FC } from "react";
import Head from "next/head";
// components
import { CommonCard } from "components/card";
import { NursePatientList } from "components/tables";
import { NurseDashboardLayout } from "layouts";
//react bootstrap
import { InputGroup, Form } from "react-bootstrap";
//icons
import { Search } from "components/styled-icons";

interface IProps {}

const PatientSummary: FC<IProps> = (props) => {
  return (
    <NurseDashboardLayout>
      <Head>
        <title>Patient Summary</title>
      </Head>
      <div className="mx-4">
        <CommonCard>
          <div className="d-flex align-items-center">
            <h6>Patient List</h6>
            <div className="ms-auto d-flex align-items-center">
              <button className="btn btn-sm btn-outline-primary me-3 w-100">Add New Patient</button>
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
          <div className="mt-3">
            <NursePatientList />
          </div>
        </CommonCard>
      </div>
    </NurseDashboardLayout>
  );
};
export default PatientSummary;
