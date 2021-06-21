// react
import React, { FC } from "react";
import Head from "next/head";
// components
import { CommonCard } from "components/card";
import { NurseDashboardLayout } from "layouts";
import { Tasks } from "components/elements";
//icons
import { Tasks as TaskIcon } from "components/styled-icons";
import { CheckCircle } from "components/styled-icons";
import { ArrowCounterclockwise } from "components/styled-icons";
import { FilterAlt } from "components/styled-icons";

interface IProps {}

const NurseTasks: FC<IProps> = (props) => {
  const buttons = [
    {
      name: "All",
      icon: TaskIcon,
    },
    {
      name: "Done",
      icon: CheckCircle,
    },
    {
      name: "Pending",
      icon: ArrowCounterclockwise,
    },
  ];
  return (
    <NurseDashboardLayout>
      <Head>
        <title>Calender</title>
      </Head>
      <div className="mx-4">
        <CommonCard>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div>
              {buttons.map((item, id) => {
                const Icon = item.icon;
                return (
                  <button className="btn btn-sm bg-light-primary fw-bold text-primary border-0 me-3">
                    <Icon className="text-primary" size="20" /> {item.name}
                  </button>
                );
              })}
            </div>
            <button className="btn btn-sm btn-outline-dark ms-auto">
              <FilterAlt className="text-muted" size="20" /> SORT : A-Z
            </button>
          </div>
          {/* Task List */}
          <Tasks />
        </CommonCard>
      </div>
    </NurseDashboardLayout>
  );
};
export default NurseTasks;
