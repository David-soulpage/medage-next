// react
import React from "react";
// next
import Head from "next/head";
//components
import { CommonCard } from "components/card";
import DoctorDashboardLayout from "layouts/DoctorDashboardLayout";
import { Tasks as TasksList } from "components/elements";
//icons
import { Tasks as TaskIcon } from "components/styled-icons";
import { CheckCircle } from "components/styled-icons";
import { ArrowCounterclockwise } from "components/styled-icons";
import { FilterAlt } from "components/styled-icons";

const Tasks = () => {
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
                <button className="btn btn-sm bg-light-primary fw-bold text-primary border-0">
                  <TaskIcon className="text-primary" size="20" /> All
                </button>
                <button className="btn btn-sm bg-light-primary fw-bold text-primary border-0 mx-3">
                  <CheckCircle className="text-primary" size="20" /> Done
                </button>
                <button className="btn btn-sm bg-light-primary fw-bold text-primary border-0">
                  <ArrowCounterclockwise className="text-primary" size="20" /> Pending
                </button>
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
