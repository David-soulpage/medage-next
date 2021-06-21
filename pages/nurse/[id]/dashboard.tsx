// react
import React from "react";
// next
import Head from "next/head";
// layouts
import NurseDashboardLayout from "layouts/NurseDashboardLayout";
// components
import { PatientList } from "components/tables";
import { CommonCard } from "components/card";
import { DashboardMessages, DashboardTasks } from "components/elements";

//styled icons
import { Search } from "components/styled-icons";

//react bootstrap
import { Form, InputGroup } from "react-bootstrap";
import CardSection from "components/elements/CardSection";

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
        <title>Nurse Dashboard</title>
      </Head>
      <NurseDashboardLayout>
        <div className="container pt-2">
          <h6 className="text-dark mb-3">Dashboard</h6>

          <div className="row g-3">
            <CardSection list={cards} />
          </div>
        </div>

        <div className="container h-100 mt-4">
          <div className="row g-3">
            <div className="col-lg-6 col-12">
              <CommonCard>
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="fw-bold m-0">Patient List</h6>
                  </div>
                  <div className="ms-3">
                    <button className="btn btn-sm btn-outline-primary">
                      <small>Add new patient</small>{" "}
                    </button>
                  </div>
                  <div className="ms-auto">
                    <InputGroup className="d-flex align-items-center bg-light">
                      <Form.Control placeholder="Search" className="border-0 bg-light" />
                      <Search className="text-dark mx-2" size="20" />
                    </InputGroup>
                  </div>
                </div>
                <div className="my-3">
                  <PatientList />
                </div>
              </CommonCard>
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
          </div>
        </div>
      </NurseDashboardLayout>
    </>
  );
};

export default Dashboard;
