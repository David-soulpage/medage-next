// react
import React from "react";
// next
import Head from "next/head";
// layouts
import DoctorLayout from "layouts/DoctorLayout";
// components
import { AppointmentCard } from "components/card";
import { DashboardMessages } from "components/elements";
import DashboardTasks from "components/elements/DashboardTasks";
import CardSection from "components/elements/CardSection";

import CustomCalender from "components/elements/CustomCalender";

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

  return (
    <>
      <Head>
        <title>Doctor Dashboard</title>
      </Head>
      <DoctorLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Dashboard</h6>

          <div className="row g-3">
            <CardSection list={cards} />
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
                  <DashboardTasks />
                </div>
                <div className="col-12 h-100">
                  <DashboardMessages />
                </div>
              </div>
            </div>
            <div className="col-12">
              <CustomCalender />
            </div>
          </div>
        </div>
      </DoctorLayout>
    </>
  );
};

export default Dashboard;
