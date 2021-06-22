// react
import React from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { ReportsTable } from "components/tables";
// layouts
import DoctorLayout from "layouts/DoctorLayout";
// react bootstrap
import { Form, InputGroup } from "react-bootstrap";
//icons
import { Search } from "components/styled-icons";

const analytics = () => {
  return (
    <>
      <Head>
        <title>Doctor Reports</title>
      </Head>
      <DoctorLayout>
        <div className="container pt-2">
          <CommonCard>
            <div className="d-flex flex-column flex-md-row align-items-center mb-3">
              <h6 className="title m-0">Reports List</h6>
              <div className="d-flex flex-column flex-md-row ms-auto align-items-center">
                <InputGroup className="bg-light px-2 py-0 rounded me-4 d-flex align-items-center">
                  <Form.Control placeholder="Search  by ID, Name" className="border-0 bg-light" />
                  <InputGroup.Append>
                    <Search className="text-dark ms-2" size="20" />
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
      </DoctorLayout>
    </>
  );
};

export default analytics;
