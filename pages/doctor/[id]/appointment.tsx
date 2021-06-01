import React from "react";
//local components
import { CommonCard } from "@components/card";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import { PatientDetails } from "@components/elements";
// react bootstrap
import { Form, InputGroup } from "react-bootstrap";
//icons
import { Printer } from "@styled-icons/bootstrap";
import { AppointmentsTable } from "@components/tables";

const Appointment = () => {
  return (
    <DoctorDashboardLayout>
      <div className="container py-5">
        <h3 className="text-dark mb-3">Appointments</h3>
        <div className="row g-3">
          <div className="col-md-12">
            <CommonCard>
              <PatientDetails />
            </CommonCard>
          </div>
          <div className="col-md-12">
            <CommonCard>
              <div className="d-flex">
                <div className="d-flex">
                  <h6 className="title m-0">Future Appointments</h6>
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
  );
};

export default Appointment;
