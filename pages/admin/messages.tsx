import React, { useState } from "react";
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import RadiologyMessagesModal from "components/modal/RadiologyMessagesModal";
import { AdminNavbar, Header } from "components/elements";
//icons
import { Dropdown } from "react-bootstrap";
import RadiologyMessage from "components/elements/RadiologyMessage";

const Messages = () => {
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

  const MessagesHeader = () => {
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
    <>
      <Head>
        <title>Admin Messages</title>
      </Head>
      <div className="sticky-top">
        <Header />
        <AdminNavbar />
      </div>
      <div className="container-fluid py-3 px-5 bg-light">
        <CommonCard>
          {/* Header */}
          <MessagesHeader />
          {/* Messages */}
          {messages.map((message: any, id) => {
            return <RadiologyMessage key={id} message={message} />;
          })}
          {show && <RadiologyMessagesModal show={show} handleClose={handleClose} />}
        </CommonCard>
      </div>
    </>
  );
};

export default Messages;
