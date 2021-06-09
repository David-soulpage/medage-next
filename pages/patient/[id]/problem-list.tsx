// react
import React, { FC, useState } from "react";
// components
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";
import ActiveProblemCard from "@components/card/ActiveProblemCard";
import RecurringProblem from "@components/elements/RecurringProblem";

interface IProps {}

const PatientDashboard: FC<IProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const list = ["New Problem", "Recurring Problem", "Chronic Problem"];

  const onPressItem = (index) => {
    setSelectedIndex(index);
  };

  const onPressNext = () => {
    setSelectedIndex(selectedIndex + 1);
  };

  const RenderBasedOnIndex = () => {
    switch (selectedIndex) {
      case 0:
        return <ActiveProblemCard onPressNext={onPressNext} />;
      case 1:
        return <RecurringProblem />;
      case 2:
        return <RecurringProblem />;
    }
  };

  return (
    <PatientDashboardLayout>
      <div className="mx-4">
        <small className="text-base-balck fw-bold mt-2">Active Problem</small>
        <div className="card border-0 shadow-sm p-4 mt-3">
          <div className="d-flex flex-row align-items-center">
            {list.map((ele, index) => {
              return (
                <div className="me-5 btn p-0" key={index} onClick={() => onPressItem(index)}>
                  <small
                    className={`${index === selectedIndex ? "text-primary" : "text-base-black"}`}
                  >
                    {ele}
                  </small>
                  <div
                    className={`rounded mt-2 ${
                      index === selectedIndex ? "bg-primary" : "bg-white"
                    }`}
                    style={{ height: 2 }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="bg-light-grey-two" style={{ height: 1 }}></div>
          <RenderBasedOnIndex />
        </div>
      </div>
    </PatientDashboardLayout>
  );
};
export default PatientDashboard;
