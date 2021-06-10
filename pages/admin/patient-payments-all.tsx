import React from "react";
//local components
import AdminLayout from "layouts/AdminLayout";
import { CommonCard } from "components/card";
import { PatientPaymentsTable } from "components/tables";
//react bootstrap
import { Form, InputGroup } from "react-bootstrap";
//lodash
import _ from "lodash";
//icons
import { Search } from "styled-icons/bootstrap";

const PatientsPaymentAll = () => {
  return (
    <AdminLayout>
      <div className="container mt-3">
        <CommonCard>
          <div className="d-flex border-bottom p-2">
            <h6 className="m-0">Patient Payments</h6>
          </div>
          <div className="d-flex justify-content-start">
            <div>
              <InputGroup className="mt-3 border px-2 rounded d-flex align-items-center">
                <Form.Control placeholder="Search Patient" className="border-0 me-2" />
                <InputGroup.Append>
                  <Search size="20" />
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
          <h6 className="mt-3">Patient with unallocated Balance</h6>
          <div className="mt-3">
            <PatientPaymentsTable />
          </div>
        </CommonCard>
      </div>
    </AdminLayout>
  );
};

export default PatientsPaymentAll;
