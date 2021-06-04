import React from "react";
import Head from "next/head";
//local components
import { CommonCard } from "@components/card";
import { PatientDetailsSmall, PatientSummary } from "@components/elements";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";

const Summary = () => {
  return (
    <>
      <Head>
        <title>Patient Summary</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Appointments</h6>
          {/* Patient Details */}
          <div className="row g-3">
            <div className="col-12">
              <CommonCard>
                <PatientDetailsSmall />
              </CommonCard>
            </div>
            <div className="col-12">
              <PatientSummary />
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Summary;
