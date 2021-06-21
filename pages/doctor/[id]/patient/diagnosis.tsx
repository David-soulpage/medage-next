// react
import React, { useState } from "react";
// next
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { DiagnosisTable, SummaryTable } from "components/tables";
// layouts
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const Diagnosis = () => {
  const [view, setView] = useState(false);

  const toggle = () => {
    setView(!view);
  };

  return (
    <>
      <Head>
        <title>Diagnosis</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          <div className="row g-3">
            <div className="col-12">
              <CommonCard>
                <PatientDetailsSmall />
              </CommonCard>
            </div>
            <div className="col-12">
              <CommonCard>
                <div className="d-flex border-bottom">
                  <h6 className="m-0 border-primary border-bottom cr-p" onClick={toggle}>
                    Diagnosis
                  </h6>
                  <h6 className="m-0 mx-4 cr-p" onClick={toggle}>
                    Longitudinal View
                  </h6>
                </div>

                {/* Diagnosis Table */}
                <div className="mt-3">{view ? <DiagnosisTable /> : <SummaryTable />}</div>
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Diagnosis;
