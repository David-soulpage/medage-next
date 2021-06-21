import React from "react";
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { VitalTable } from "components/tables";
import { NurseDashboardLayout } from "layouts";

const VitalReference = () => {
  return (
    <>
      <Head>
        <title>Vital Reference</title>
      </Head>
      <NurseDashboardLayout>
        <div className="container pt-2">
          <h6 className="fw-bold">Vitals</h6>
          <CommonCard>
            {/* Vital Table */}
            <VitalTable />
          </CommonCard>
        </div>
      </NurseDashboardLayout>
    </>
  );
};

export default VitalReference;
