// react
import React, { FC } from "react";
// components
import { PatientInformationCard } from "@components/card";
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";

interface IProps {}

const PatientDashboard: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      <PatientInformationCard />
    </PatientDashboardLayout>
  );
};
export default PatientDashboard;
