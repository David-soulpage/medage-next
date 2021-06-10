// react
import React from "react";
// next
import Head from "next/head";
//components
import { CommonCard } from "components/card";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";
import { Tasks as TasksList } from "components/elements";
//icons
import { Tasks as TaskIcon } from "@styled-icons/fa-solid";
import { CheckCircle } from "@styled-icons/feather";
import { ArrowCounterclockwise } from "@styled-icons/bootstrap";
import { FilterAlt } from "@styled-icons/boxicons-regular";
//lodash
import _ from "lodash";

const Tasks = () => {
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
    <>
      <Head>
        <title>Doctor Tasks</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Tasks</h6>
          <CommonCard>
            {/* Header */}
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div>
                {_.map(buttons, (item, id) => {
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
            <TasksList />
          </CommonCard>
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Tasks;
