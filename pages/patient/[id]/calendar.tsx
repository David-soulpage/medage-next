// react
import React, { FC } from "react";
// components
import CustomCalender from "@components/elements/CustomCalender";
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";

interface IProps {}

const Calender: FC<IProps> = (props) => {
  return (
    <PatientDashboardLayout>
      <div className="mx-5 mt-3">
        <CustomCalender />
      </div>
    </PatientDashboardLayout>
  );
};
export default Calender;
