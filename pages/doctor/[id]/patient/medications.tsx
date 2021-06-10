// next
import React from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { MedicationTable } from "components/tables";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const Medications = () => {
  return (
    <>
      <Head>
        <title>Medications</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container mt-2">
          {/* Patient Details */}
          <div className="row g-3">
            <div className="col-12">
              <CommonCard>
                <PatientDetailsSmall />
              </CommonCard>
            </div>
            <div className="col-12">
              <CommonCard>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h6 className="title m-0">Diagnosis</h6>
                  </div>
                </div>
                <div className="border-top my-3"></div>
                <MedicationTable />
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Medications;
