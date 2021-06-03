import React from "react";
// local components

import { AppointmentCard } from "@components/card";
//lodash
import _ from "lodash";
//styled icons

import { CheckDouble, DotsVerticalRounded } from "@styled-icons/boxicons-regular";
import CardSection from "@components/elements/CardSection";
import RadiologyHeader from "@components/elements/RadiologyHeader";
import { AccountCircle } from "@styled-icons/material-outlined";

import { Exclamation } from "styled-icons/bootstrap";
import { Forward } from "@styled-icons/entypo";

const Dashboard = () => {
  const cards = [
    {
      title: "Total reports processed",
      number: "1345",
      icon: "user",
      background: "bg-primary-light",
    },
    {
      title: "No. of Appointments today",
      number: "34",
      icon: "clock",
      background: "bg-orange-light",
    },
    {
      title: "New messages",
      number: "27",
      icon: "message",
      background: "bg-green-light",
    },
    {
      title: "Other KPI’s",
      number: "5.10%",
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
    <div className="bg-light">
      <RadiologyHeader />
      <div className="container pt-5">
        <h3 className="text-dark mb-3">Dashboard</h3>
        <CardSection list={cards} />
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <AppointmentCard />
          </div>
          <div className="col-md-6 ">
            <div className="row  h-100">
              <div className="col-12">
                <div className="card p-4 border-0 shadown-sm">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="fw-bold m-0">Tasks</h6>
                    </div>
                    <div className="ms-auto">
                      <button className="btn btn-sm btn-outline-secondary">New Task +</button>
                    </div>
                  </div>
                  {_.map(tasks, (task, id) => (
                    <div key={id} className="mt-4">
                      <div className="d-flex align-items-center">
                        <div className="p-3 border-0 bg-primary-light rounded">
                          <CheckDouble size="20" />
                        </div>
                        <div className="ms-3">
                          <small className="m-0 d-block text-dark fw-bold">{task.title}</small>
                          <small className="text-muted">{task.status}</small>
                        </div>
                        <div className="ms-auto d-flex align-items-center  ">
                          <small className="fw-bold me-3 text-muted">{task.date}</small>

                          <DotsVerticalRounded size="20" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 align-self-end">
                <div className="card p-4 border-0 shadown-sm">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="fw-bold m-0">Messages (2 unread)</h6>
                    </div>
                    <div className="ms-auto">
                      <button className="btn btn-sm btn-outline-secondary">Sort by</button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="card bg-light p-3 border-0">
                      <div className="d-flex align-items-start">
                        <AccountCircle size="30" />
                        <div className="ms-3">
                          <div className="d-flex align-items-center ">
                            <small className="m-0 d-block text-dark fw-bold me-3">
                              Helena Chavez
                            </small>
                            <Exclamation size="20" />
                          </div>
                          <small className="text-muted">
                            How To Write Better Advertising Copy Examples
                          </small>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                          <small className="fw-bold text-muted me-3">15th Apr 2021, 11:52 AM</small>
                          <DotsVerticalRounded size="20" />
                        </div>
                      </div>
                      <div className="d-flex flex-row-reverse">
                        <button className="btn-sm border-0 ">
                          <Forward size="20" />
                          <small className="ms-3 text-primary">Reply</small>
                        </button>
                      </div>
                    </div>
                    <div className=" d-flex flex-row-reverse mt-3">
                      <small className="text-primary">View All</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
