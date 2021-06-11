// react
import React, { FC } from "react";
import Head from "next/head";
// components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { CommonCard } from "components/card";
import NurseAppointmentTable from "components/tables/NurseAppointmentTable";
//react bootstrap
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "@styled-icons/boxicons-regular";

interface IProps {}

const Appointments: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      <Head>
        <title>Appointments</title>
      </Head>
      <div className="mx-4">
        <small className="text-base-black fw-bold mt-4 mb-3">Appointments</small>
        <CommonCard>
          <div className="d-flex align-items-center">
            <div>
              <InputGroup className="p-1 bg-light d-flex align-items-center">
                <Form.Control className="border-0 bg-light" placeholder="Search" />
                <Search size="20" />
              </InputGroup>
            </div>
            <div className="d-flex ms-auto">
              <div className="me-2">
                <Form.Control placeholder="Select Date" />
              </div>
              <button className="btn btn-outline-primary btn-sm">New Appointment</button>
            </div>
          </div>
          <div className="mt-3">
            <NurseAppointmentTable />
          </div>
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};
export default Appointments;
