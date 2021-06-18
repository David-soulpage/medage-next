// react
import React, { FC, useState } from "react";
import Head from "next/head";
// components
import { CommonCard } from "components/card";
import { NurseDashboardLayout } from "layouts";
import RadiologyMessage from "components/elements/RadiologyMessage";
import RadiologyMessagesModal from "components/modal/RadiologyMessagesModal";

// boostrap
import { Dropdown } from "react-bootstrap";

interface IProps {}

const NurseMessages: FC<IProps> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const messages = [
    {
      name: "Helena Chavez",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },
    {
      name: "David Nirmal",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },

    {
      name: "Helena Chavez",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },

    {
      name: "Helena Chavez",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },

    {
      name: "Helena Chavez",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },

    {
      name: "Helena Chavez",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },

    {
      name: "Helena Chavez",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },

    {
      name: "Helena Chavez",
      subject: "About our new project",
      text: "How To Write Better Advertising Copy",
      date: "11:52 AM-04/04/2021",
    },
  ];

  const Header = () => {
    return (
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h6 className="m-0">Messages</h6>
        <div className="d-flex">
          <button
            className="btn btn-outline-primary btn-sm px-4 me-4"
            onClick={() => setShow(true)}
          >
            New Conversation
          </button>
          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              className="border ms-2 me-2 text-light-grey font-smaller btn-sm"
            >
              Sort by: A-Z
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  };
  return (
    <NurseDashboardLayout>
      <Head>
        <title>Calender</title>
      </Head>
      <div className="mx-4">
        <CommonCard>
          <Header />
          {/* Messages */}
          {messages.map((message: any, id) => {
            return <RadiologyMessage key={id} message={message} />;
          })}
          {show && <RadiologyMessagesModal show={show} handleClose={handleClose} />}
        </CommonCard>
      </div>
    </NurseDashboardLayout>
  );
};
export default NurseMessages;
