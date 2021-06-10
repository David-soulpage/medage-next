import React from "react";
//head
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";
import { PatientDetails } from "components/elements";
//icons
import { Printer } from "styled-icons/bootstrap";
import { AppointmentsTable } from "components/tables";

const Appointment = () => {
  return (
    <>
      <Head>
        <title>Doctor Appointment</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Appointments</h6>
          <div className="row g-3">
            <div className="col-md-12">
              <CommonCard>
                <PatientDetails />
              </CommonCard>
            </div>
            <div className="col-md-12">
              <CommonCard>
                <div className="d-flex border-bottom">
                  <div className="d-flex">
                    <h6 className="title m-0 border-bottom border-primary">Future Appointments</h6>
                    <h6 className="title mx-4">Post Appointments</h6>
                  </div>
                  <div className="ms-auto">
                    <Printer style={{ height: "20px" }} className="text-dark" />
                  </div>
                </div>
                {/* Appointments Table */}
                <AppointmentsTable />
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Appointment;
