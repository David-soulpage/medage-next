import React from "react";
import Head from "next/head";
//local components
import { CommonCard } from "@components/card";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import { ReportsTable } from "@components/tables";
// react bootstrap
import { Form, InputGroup } from "react-bootstrap";
//icons
import { Search } from "@styled-icons/bootstrap";

const analytics = () => {
  return (
    <>
      <Head>
        <title>Doctor Reports</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Reports</h6>
          <CommonCard>
            <div className="d-flex flex-column flex-md-row align-items-center">
              <h6 className="title m-0">Reports List</h6>
              <div className="d-flex flex-column flex-md-row ms-auto align-items-center">
                <InputGroup className="bg-light px-2 py-0 rounded me-4 d-flex align-items-center">
                  <Form.Control
                    placeholder="Search  by ID, Name"
                    className="border-0 bg-light me-2"
                  />
                  <InputGroup.Append>
                    <Search className="text-dark icon-height" />
                  </InputGroup.Append>
                </InputGroup>
                <button className="btn btn-outline-dark w-75 text-muted btn-sm">
                  <small>Sort By A-Z</small>
                </button>
              </div>
            </div>
            <ReportsTable />
          </CommonCard>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default analytics;
