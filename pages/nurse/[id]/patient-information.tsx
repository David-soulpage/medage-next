// react
import React, { FC } from "react";
import Head from "next/head";
// components
import { PatientInformationCard } from "components/card";
import { NurseDashboardLayout } from "layouts";

interface IProps {}

const PatientInformation: FC<IProps> = (props) => {
  return (
    <NurseDashboardLayout>
      <Head>
        <title>Patient Information</title>
      </Head>
      <div className="mx-4">
        <PatientInformationCard />
      </div>
    </NurseDashboardLayout>
  );
};
export default PatientInformation;
