import React from "react";
//local components
import { CommonCard } from "@components/card";
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import { Tasks as TasksList } from "@components/elements";
// react bootstrap
import { Form, InputGroup } from "react-bootstrap";
//icons
import { Tasks as TaskIcon } from "@styled-icons/fa-solid";
import { CheckCircle } from "@styled-icons/feather";
import { ArrowCounterclockwise } from "@styled-icons/bootstrap";
import { FilterAlt } from "@styled-icons/boxicons-regular";

const Tasks = () => {
  return (
    <DoctorDashboardLayout>
      <div className="container py-5">
        <h3 className="text-dark mb-3">Tasks</h3>
        <CommonCard>
          {/* Header */}
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div>
              <button className="btn bg-primary-light fw-bold text-primary border-0">
                <TaskIcon className="text-primary icon-height" /> All
              </button>
              <button className="btn bg-primary-light fw-bold text-primary border-0 mx-3">
                <CheckCircle className="text-primary icon-height" /> Done
              </button>
              <button className="btn bg-primary-light fw-bold text-primary border-0">
                <ArrowCounterclockwise className="text-primary icon-height" /> Pending
              </button>
            </div>
            <button className="btn btn-outline-secondary ms-auto">
              <FilterAlt className="icon-height text-muted" /> SORT : A-Z
            </button>
          </div>
          {/* Task List */}
          <TasksList />
        </CommonCard>
      </div>
    </DoctorDashboardLayout>
  );
};

export default Tasks;
