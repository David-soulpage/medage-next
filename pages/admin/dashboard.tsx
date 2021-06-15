import React from "react";
import Head from "next/head";
//local components
import {
  AdminNavbar,
  BillingSummary,
  DashboardMessages,
  DashboardTasks,
  Header,
  LiveClaims,
  PatientPayments,
} from "components/elements";
import CardSection from "components/elements/CardSection";
import AdminLayout from "layouts/AdminLayout";

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

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="sticky-top">
        <Header />
        <AdminNavbar />
      </div>

      <div className="container-fluid py-3 px-5 bg-light">
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
            <DashboardTasks />
          </div>
          <div className="col-md-6">
            <DashboardMessages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
