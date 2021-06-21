// react
import React, { FC } from "react";
import Head from "next/head";
// components
import { CommonCard } from "components/card";
import { NurseDashboardLayout } from "layouts";
import AdminCalendar from "components/elements/AdminCalendar";

interface IProps {}

const Calendar: FC<IProps> = (props) => {
  return (
    <NurseDashboardLayout>
      <Head>
        <title>Calender</title>
      </Head>
      <div className="mx-4">
        <CommonCard>
          <AdminCalendar />
        </CommonCard>
      </div>
    </NurseDashboardLayout>
  );
};
export default Calendar;
