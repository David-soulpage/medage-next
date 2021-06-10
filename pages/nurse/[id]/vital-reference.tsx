import React from "react";
import Head from "next/head";
//local components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { CommonCard } from "components/card";
import { VitalTable } from "components/tables";

const VitalReference = () => {
  return (
    <>
      <Head>
        <title>Vital Reference</title>
      </Head>
      <PatientDashboardLayout>
        <div className="container pt-2">
          <h6 className="fw-bold">Vitals</h6>
          <CommonCard>
            {/* Vital Table */}
            <VitalTable />
          </CommonCard>
        </div>
      </PatientDashboardLayout>
    </>
  );
};

export default VitalReference;
