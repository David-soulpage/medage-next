// react
import React from "react";
// local components
import { AppointmentCard } from "@components/card";
import RadiologyHeader from "@components/elements/RadiologyHeader";
import CustomCalender from "@components/elements/CustomCalender";
import RadiologyTasks from "@components/elements/RadiologyTasks";
import CardSection from "@components/elements/CardSection";
//lodash
import _ from "lodash";
//styled icons
import { DotsVerticalRounded } from "@styled-icons/boxicons-regular";
import { AccountCircle } from "@styled-icons/material-outlined";
import { Exclamation } from "styled-icons/bootstrap";
import { Forward } from "@styled-icons/entypo";
// next router
import Router from "next/router";

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
                <RadiologyTasks />
              </div>
              <div className="col-12 align-self-end">
                <div className="card p-4 border-0 shadown-sm">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="fw-bolder m-0 text-base-black">
                        Messages
                        <span className="text-base-black fw-normal ms-2">(2 unread)</span>{" "}
                      </h6>
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
                            <small className="m-0 d-block text-base-black fw-bold me-3">
                              Helena Chavez
                            </small>
                            <Exclamation size="20" />
                          </div>
                          <small className="text-light-purple">
                            How To Write Better Advertising Copy Examples
                          </small>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                          <small className=" fw-light me-3  text-light-purple font-smaller">
                            15th Apr 2021, 11:52 AM
                          </small>

                          <DotsVerticalRounded size="20" />
                        </div>
                      </div>
                      <div className="d-flex flex-row-reverse">
                        <button className="btn-sm border-0 bg-light-primary ">
                          <Forward size="20" className=" text-primary" />
                          <small className="ms-3 text-primary">Reply</small>
                        </button>
                      </div>
                    </div>
                    <div
                      className=" d-flex flex-row-reverse mt-3"
                      onClick={() => Router.push("/radiology/messages")}
                    >
                      <small className="text-primary">View All</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CustomCalender />
      </div>
    </div>
  );
};

export default Dashboard;
