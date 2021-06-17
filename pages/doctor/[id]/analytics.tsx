import React from "react";
//head
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { Appointments, BarChart, LineChart } from "components/elements";
import DoctorLayout from "layouts/DoctorLayout";

const analytics = () => {
  return (
    <>
      <Head>
        <title>Doctor Analytics</title>
      </Head>
      <DoctorLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Analytics</h6>
          <div className="row g-3">
            <div className="col-md-12">
              <CommonCard>
                <LineChart />
              </CommonCard>
            </div>
            <div className="col-lg-6 col-12">
              <CommonCard>
                <BarChart />
              </CommonCard>
            </div>
            <div className="col-lg-6 col-12">
              <CommonCard>
                <Appointments />
              </CommonCard>
            </div>
          </div>
        </div>
      </DoctorLayout>
    </>
  );
};

export default analytics;
