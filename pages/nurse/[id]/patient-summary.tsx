// react
import React, { FC } from "react";
import Head from "next/head";
// components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { CommonCard } from "components/card";
import { NursePatientList } from "components/tables";

interface IProps {}

const PatientSummary: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      <Head>
        <title>Patient Summary</title>
      </Head>
      <div className="mx-4">
        <small className="text-base-black fw-bold mt-4 mb-3">Patient Summary</small>
        <CommonCard>
          <h6>Patient List</h6>
          <NursePatientList />
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};
export default PatientSummary;
