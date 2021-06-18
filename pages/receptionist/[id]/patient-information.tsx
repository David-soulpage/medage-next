import React from "react";
//local components
import { PatientInformationCard } from "components/card";
import { NurseDashboardLayout } from "layouts";

const PatientInformation = () => {
  return (
    <NurseDashboardLayout>
      <div className="container">
        <PatientInformationCard />
      </div>
    </NurseDashboardLayout>
  );
};

export default PatientInformation;
