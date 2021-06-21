import React from "react";
//local components
import { CommonCard } from "components/card";
import { SummaryTable } from "components/tables";

const PatientSummaryLongitude = () => {
  return (
    <div>
      <CommonCard>
        <div className="mt-4">
          <h6>Active Problems</h6>
          <SummaryTable />
        </div>
        <div className="mt-4">
          <h6>Diagnosis</h6>
          <SummaryTable />
        </div>
        <div className="mt-4">
          <h6>Current Medications</h6>
          <SummaryTable />
        </div>
        <div className="mt-4">
          <h6>Lab Orders</h6>
          <SummaryTable />
        </div>
        <div className="mt-4">
          <h6>Reports</h6>
          <SummaryTable />
        </div>
      </CommonCard>
    </div>
  );
};

export default PatientSummaryLongitude;
