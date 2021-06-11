// react
import React, { FC } from "react";
import Head from "next/head";
// components
import CustomCalender from "components/elements/CustomCalender";
import PatientDashboardLayout from "layouts/PatientDashboardLayout";

interface IProps {}

const Calender: FC<IProps> = (props) => {
  return (
    <>
      <Head>
        <title>Calendar</title>
      </Head>
      <PatientDashboardLayout>
        <div className="mx-5 mt-3">
          <CustomCalender />
        </div>
      </PatientDashboardLayout>
    </>
  );
};
export default Calender;
