import React from "react";
//local components
import { AdminNavbar, Header, BillingSummary, LiveClaims } from "@components/elements";
import CardSection from "@components/elements/CardSection";

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
    <div className="bg-light ">
      <Header />
      <AdminNavbar />
      <div className="container-fluid mt-3 py-3 px-5">
        <CardSection list={list} />
        <div className="row mt-4">
          <div className="col-md-6">
            <BillingSummary />
          </div>
          <div className="col-md-3">
            <LiveClaims />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
