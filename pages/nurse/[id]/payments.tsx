// react
import React, { FC } from "react";
import Head from "next/head";
// components
import { PaymentStep2 } from "components/elements";
import { CommonCard } from "components/card";
import { NurseDashboardLayout } from "layouts";

interface IProps {}

const Payments: FC<IProps> = (props) => {
  return (
    <NurseDashboardLayout>
      <Head>
        <title>Payments</title>
      </Head>
      <div className="mx-4">
        <small className="text-base-black fw-bold mt-4 mb-3">Payments</small>
        <CommonCard>
          <PaymentStep2 />
        </CommonCard>
      </div>
    </NurseDashboardLayout>
  );
};
export default Payments;
