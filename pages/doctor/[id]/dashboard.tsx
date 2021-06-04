import React from "react";
import Head from "next/head";
// local components
import DoctorDashboardLayout from "@layouts/DoctorDashboardLayout";
import { AppointmentCard, CommonCard } from "@components/card";
//lodash
import _ from "lodash";
//styled icons
import { User } from "@styled-icons/fa-regular";
import { Clock } from "@styled-icons/bootstrap";
import { MessageCircleOutline } from "@styled-icons/evaicons-outline";
import { CheckDouble } from "@styled-icons/boxicons-regular";
import { LineGraph } from "@styled-icons/entypo";

const Dashboard = () => {
  const cards = [
    {
      title: "Total reports processed",
      number: "1345",
      icon: "user",
      background: "bg-light-primary",
    },
    {
      title: "No. of Appointments today",
      number: "34",
      icon: "clock",
      background: "bg-light-warning",
    },
    {
      title: "New messages",
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
    <>
      <Head>
        <title>Doctor Dashboard</title>
      </Head>
      <DoctorDashboardLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Dashboard</h6>

          <div className="row g-3">
            {_.map(cards, (card, id) => (
              <div key={id} className="col-lg-3 col-md-6 col-12">
                <CommonCard>
                  <div className="d-flex align-items-start">
                    <div>
                      <small className="m-0 text-muted mb-2">{card.title}</small>
                      <h3 className="text-dark m-0">{card.number}</h3>
                    </div>
                    <div className="ms-auto">
                      <div className={`border-0 p-3 rounded ${card.background}`}>
                        {card.icon === "user" ? (
                          <User className="text-primary" size="20" />
                        ) : card.icon === "clock" ? (
                          <Clock className=" text-warning" size="20" />
                        ) : card.icon === "message" ? (
                          <MessageCircleOutline className=" text-success" size="20" />
                        ) : card.icon === "graph" ? (
                          <LineGraph className=" text-info" size="20" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </CommonCard>
              </div>
            ))}
          </div>
        </div>

        <div className="container h-100 mt-4">
          <div className="row g-3">
            <div className="col-lg-6 col-12">
              <AppointmentCard />
            </div>
            <div className="col-lg-6 col-12">
              <div className="row gy-3">
                <div className="col-12">
                  <CommonCard>
                    <div className="d-flex align-items-center">
                      <div>
                        <h6 className="fw-bold m-0">Tasks</h6>
                      </div>
                      <div className="ms-auto">
                        <button className="btn btn-sm btn-outline-dark text-muted">
                          New Task +
                        </button>
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
                <div className="col-12 h-100">
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
                          <div className="p-3 border rounded"></div>
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
                          <div className="p-3 border rounded"></div>
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
        </div>
      </DoctorDashboardLayout>
    </>
  );
};

export default Dashboard;
