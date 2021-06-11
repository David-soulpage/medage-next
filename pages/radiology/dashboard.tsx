// react
import React from "react";
// local components
import CustomCalender from "components/elements/CustomCalender";
import RadiologyTasks from "components/elements/RadiologyTasks";
import CardSection from "components/elements/CardSection";
import { StudyListTable } from "components/tables";
import RadiologyLayout from "layouts/RadiologyLayout";
import { RadiologyMessagesList } from "components/elements";

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
    <RadiologyLayout>
      <CardSection list={cards} />
      <div className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <StudyListTable />
          </div>
          <div className="col-md-6 ">
            <div className="row  h-100">
              <div className="col-12">
                <RadiologyTasks />
              </div>
              <div className="col-12 align-self-end">
                <RadiologyMessagesList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomCalender />
    </RadiologyLayout>
  );
};

export default Dashboard;
