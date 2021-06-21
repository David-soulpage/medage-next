// react
import React from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall, PatientSummaryLongitude } from "components/elements";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const Summary = () => {
  return (
    <>
      <Head>
        <title>Patient Summary</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          {/* Patient Details */}
          <div className="row g-2">
            <div className="col-12">
              <CommonCard>
                <PatientDetailsSmall />
              </CommonCard>
            </div>
            <div className="col-12">
              <PatientSummaryLongitude />
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Summary;
