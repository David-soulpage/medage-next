import React from "react";
//local components
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";
import { CommonCard } from "@components/card";
import { VitalTable } from "@components/tables";

const VitalReference = () => {
  return (
    <PatientDashboardLayout>
      <div className="container pt-2">
        <h6 className="fw-bold">Vitals</h6>
        <CommonCard>
          {/* Vital Table */}
          <VitalTable />
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};

export default VitalReference;
