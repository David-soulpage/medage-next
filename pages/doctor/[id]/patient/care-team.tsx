// react
import React from "react";
import Head from "next/head";
// local components
import { CommonCard, DoctorProfileCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
// layouts
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const CareTeam = () => {
  return (
    <>
      <Head>
        <title>Care Team</title>
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
                <h6 className="text-dark mb-3">Care Team</h6>
                {/* Doctor Profile Card */}
                <div className="row mt-4">
                  <div className="col-2">
                    <div className="card border rounded p-3">
                      <DoctorProfileCard />
                    </div>
                  </div>
                </div>
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default CareTeam;
