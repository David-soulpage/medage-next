// react
import React from "react";
import Head from "next/head";
// components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { AllergiesTable } from "components/tables";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const Allergies = () => {
  return (
    <>
      <Head>
        <title>Allergies</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          {/* Patient Details */}
          <div className="row g-3">
            <div className="col-12">
              <CommonCard>
                <PatientDetailsSmall />
              </CommonCard>
            </div>
            <div className="col-12">
              <AllergiesTable />
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Allergies;
