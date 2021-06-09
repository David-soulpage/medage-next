import React from "react";
//local components
import {
  AdminNavbar,
  Header,
  BillingSummary,
  LiveClaims,
  PatientPayments,
} from "@components/elements";
import CardSection from "@components/elements/CardSection";
//icons
import { CheckDouble } from "@styled-icons/boxicons-regular";
//lodash
import _ from "lodash";
import { CommonCard } from "@components/card";

const Dashboard = () => {
  const list = [
    {
      title: "No. of Paients Incoming",
      number: "131",
      icon: "user",
      background: "bg-light-primary",
    },
    {
      title: "No. of Paients out going",
      number: "34",
      icon: "clock",
      background: "bg-light-warning",
    },
    {
      title: "Total no. beds available",
      number: "27",
      icon: "message",
      background: "bg-light-success",
    },
    {
      title: "Other KPI’s",
      number: "5.10%",
      icon: "graph",
      background: "bg-light-info",
    },
  ];
  const tasks = [
    {
      title: "Meeting with Doctor John",
      status: "Online",
      date: "29 Apr 2021",
    },
    {
      title: "Client Bernard Stanley",
      status: "Exam 04",
      date: "31 Apr 2021",
    },
    {
      title: "Meeting with the client",
      status: "Exam 08",
      date: "01 Oct 2021",
    },
    {
      title: "Client Bernard Stanley",
      status: "Exam 03",
      date: "04 Oct 2021",
    },
  ];
  return (
    <div className="bg-light ">
      <Header />
      <AdminNavbar />
      <div className="container-fluid mt-3 py-3 px-5">
        <CardSection list={list} />
        <div className="row mt-4 g-3">
          <div className="col-md-6">
            <BillingSummary />
          </div>
          <div className="col-md-3">
            <LiveClaims />
          </div>
          <div className="col-md-3">
            <PatientPayments />
          </div>
          <div className="col-md-6">
            <CommonCard>
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="fw-bold m-0">Tasks</h6>
                </div>
                <div className="ms-auto">
                  <button className="btn btn-sm btn-outline-dark text-muted">New Task +</button>
                </div>
              </div>
              {_.map(tasks, (task, id) => (
                <div key={id} className="mt-4">
                  <div className="d-flex align-items-center">
                    <div className="p-3 border-0 bg-light-primary rounded">
                      <CheckDouble className="text-primary" size="20" />
                    </div>
                    <div className="ms-3">
                      <small className="m-0 d-block text-dark fw-bold">{task.title}</small>
                      <small className="text-muted">{task.status}</small>
                    </div>
                    <div className="ms-auto text-muted">
                      <small className="fw-bold">{task.date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </CommonCard>
          </div>
          <div className="col-md-6">
            <CommonCard>
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="fw-bold m-0">Messages (2 unread)</h6>
                </div>
                <div className="ms-auto">
                  <button className="btn btn-sm btn-outline-dark text-muted">Sort by</button>
                </div>
              </div>

              <div className="mt-4">
                <div className="card bg-light p-3 border-0">
                  <div className="d-flex align-items-start">
                    <img
                      src="/profile.jpg"
                      alt="Profile Image"
                      className="img-fit rounded"
                      width="50px"
                      height="50px"
                    />
                    <div className="ms-3">
                      <small className="m-0 d-block text-dark fw-bold">Helena Chavez</small>
                      <small className="text-muted">
                        How To Write Better Advertising Copy Examples
                      </small>
                    </div>
                    <div className="ms-auto text-muted">
                      <small className="fw-bold">24 May, 2021</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="card bg-light p-3 border-0">
                  <div className="d-flex align-items-start">
                    <img
                      src="/profile.jpg"
                      alt="Profile Image"
                      className="img-fit rounded"
                      width="50px"
                      height="50px"
                    />
                    <div className="ms-3">
                      <small className="m-0 d-block text-dark fw-bold">Helena Chavez</small>
                      <small className="text-muted">
                        How To Write Better Advertising Copy Examples
                      </small>
                    </div>
                    <div className="ms-auto text-muted">
                      <small className="fw-bold">24 May, 2021</small>
                    </div>
                  </div>
                </div>
              </div>
            </CommonCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
