import { CommonCard } from "@components/card";
import { Appointments, BarChart, LineChart } from "@components/elements";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import React from "react";

const analytics = () => {
  return (
    <DoctorDashboardLayout>
      <div className="container py-5">
        <h3 className="text-dark mb-3">Analytics</h3>
        <div className="row g-3">
          <div className="col-md-12">
            <CommonCard>
              <LineChart />
            </CommonCard>
          </div>
          <div className="col-md-6">
            <CommonCard>
              <BarChart />
            </CommonCard>
          </div>
          <div className="col-md-6">
            <CommonCard>
              <Appointments />
            </CommonCard>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default analytics;
