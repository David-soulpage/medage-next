import React from "react";
//local components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { CommonCard } from "components/card";
import { VitalTestsTable } from "components/tables";

const VitalReference = () => {
  return (
    <PatientDashboardLayout>
      <div className="container pt-2">
        <h6 className="fw-bold">Vitals</h6>
        <CommonCard>
          <h6 className="fw-bold m-0">Tests</h6>
          {/* Vital Table */}
          <VitalTestsTable />
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};

export default VitalReference;
