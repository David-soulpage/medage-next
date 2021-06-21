// react
import React, { useState } from "react";
// next
import Head from "next/head";
// local components
import { CommonCard } from "components/card";
import { PatientDetailsSmall } from "components/elements";
import { SummaryTable, TestsTable } from "components/tables";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";

const LabOrders = () => {
  const [view, setView] = useState(false);

  const toggle = () => {
    setView(!view);
  };

  return (
    <>
      <Head>
        <title>Lab Orders</title>
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
                <div className="d-flex align-items-center border-bottom">
                  <div className="d-flex h-100">
                    <h6 className="m-0 border-primary border-bottom cr-p" onClick={toggle}>
                      Lab Orders
                    </h6>
                    <h6 className="m-0 mx-4 cr-p" onClick={toggle}>
                      Longitudinal View
                    </h6>
                  </div>
                </div>
                <div className="mt-3">{view ? <SummaryTable /> : <TestsTable />}</div>
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default LabOrders;
