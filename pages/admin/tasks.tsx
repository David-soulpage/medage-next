import React from "react";
// next
import Head from "next/head";
//local components
import AdminLayout from "layouts/AdminLayout";
import { CommonCard } from "components/card";
//icons
import { AdminNavbar, Header, Tasks as TaskList } from "components/elements";
import { Tasks as TaskIcon } from "components/styled-icons";
import { CheckCircle } from "components/styled-icons";
import { ArrowCounterclockwise } from "components/styled-icons";
import { FilterAlt } from "components/styled-icons";

const Tasks = () => {
  return (
    <>
      <Head>
        <title>Admin Tasks</title>
      </Head>
      <div className="sticky-top">
        <Header />
        <AdminNavbar />
      </div>
      <div className="container-fluid py-3 px-5 bg-light">
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
            <div className="ms-auto">
              <button className="btn btn-outline-primary btn-sm me-3">New Task</button>
              <button className="btn btn-sm btn-outline-dark">
                <FilterAlt className="text-muted" size="20" /> SORT : A-Z
              </button>
            </div>
          </div>
          {/* Task List */}
          <TaskList />
        </CommonCard>
      </div>
    </>
  );
};

export default Tasks;
