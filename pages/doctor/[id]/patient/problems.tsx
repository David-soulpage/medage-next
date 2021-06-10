// react
import React from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { ProblemsTable } from "components/tables";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const Problems = () => {
  return (
    <>
      <Head>
        <title>Problems</title>
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
              <CommonCard>
                <ProblemsTable />
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Problems;
