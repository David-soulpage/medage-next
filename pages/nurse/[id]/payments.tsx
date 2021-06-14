// react
import React, { FC } from "react";
import Head from "next/head";
// components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { PaymentStep2 } from "components/elements";
import { CommonCard } from "components/card";

interface IProps {}

const Payments: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      <Head>
        <title>Payments</title>
      </Head>
      <div className="mx-4">
        <small className="text-base-black fw-bold mt-4 mb-3">Payments</small>
        <CommonCard>
          <PaymentStep2 />
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};
export default Payments;
