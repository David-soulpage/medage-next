// react
import React from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall, Pharmacies } from "components/elements";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const Pharmacy = () => {
  return (
    <>
      <Head>
        <title>Pharmacy</title>
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
              <Pharmacies />
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Pharmacy;
