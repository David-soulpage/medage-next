// react
import React, { FC } from "react";
// components
import { PatientInformationCard } from "components/card";
import PatientDashboardLayout from "layouts/PatientDashboardLayout";

interface IProps {}

const PatientInformation: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      <div className="mx-4">
        <small className="text-base-black fw-bold mt-4 mb-3">Patient Information</small>
        <PatientInformationCard />
      </div>
    </PatientDashboardLayout>
  );
};
export default PatientInformation;
