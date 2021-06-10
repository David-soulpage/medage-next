import React from "react";
import Head from "next/head";
//local components
import AdminLayout from "layouts/AdminLayout";
import { CommonCard } from "components/card";
//lodash
import _ from "lodash";
//icons
import { Tasks as TaskList } from "components/elements";
import { Tasks as TaskIcon } from "styled-icons/fa-solid";
import { CheckCircle } from "styled-icons/feather";
import { ArrowCounterclockwise } from "styled-icons/bootstrap";
import { FilterAlt } from "styled-icons/boxicons-regular";

const Tasks = () => {
  return (
    <>
      <Head>
        <title>Admin Tasks</title>
      </Head>
      <AdminLayout>
        <div className="container mt-3">
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
            <TaskList />
          </CommonCard>
        </div>
      </AdminLayout>
    </>
  );
};

export default Tasks;
