// react
import React, { FC } from "react";
// components
import { PatientInformationCard } from "@components/card";
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";
import ActiveProblemCard from "@components/card/ActiveProblemCard";

interface IProps {}

const PatientDashboard: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      {/* <PatientInformationCard /> */}
      <ActiveProblemCard />
    </PatientDashboardLayout>
  );
};
export default PatientDashboard;
