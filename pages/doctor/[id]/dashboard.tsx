import React from "react";
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
    <DoctorDashboardLayout>
      <div className="container pt-5">
        <h3 className="text-dark mb-3">Dashboard</h3>

        <div className="row">
          {_.map(cards, (card, id) => (
            <div key={id} className="col-md-3">
              <CommonCard>
                <div className="d-flex align-items-center">
                  <div>
                    <small className="m-0 text-muted mb-2">{card.title}</small>
                    <h3 className="text-muted m-0">{card.number}</h3>
                  </div>
                  <div className="ms-auto">
                    <div className={`border-0 p-3 rounded ${card.background}`}>
                      {card.icon === "user" ? (
                        <User className="text-primary icon-height" />
                      ) : card.icon === "clock" ? (
                        <Clock className="icon-height orange" />
                      ) : card.icon === "message" ? (
                        <MessageCircleOutline className="icon-height green" />
                      ) : null}
                    </div>
                  </div>
                </div>
              </CommonCard>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <AppointmentCard />
          </div>
          <div className="col-md-6">
            <div className="row gy-3">
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
                          <CheckDouble className="text-primary icon-height" />
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
                </div>
              </div>
              <div className="col-12">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default Dashboard;
