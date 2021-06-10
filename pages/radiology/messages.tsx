// react
import React, { FC, useState } from "react";
// boostrap
import { Dropdown } from "react-bootstrap";

// component
import RadiologyMessage from "components/elements/RadiologyMessage";
import RadiologyMessagesModal from "components/modal/RadiologyMessagesModal";
import RadiologyLayout from "layouts/RadiologyLayout";

const Messages: FC = () => {
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
        <h6 className="title m-0">Messages</h6>
        <div className="d-flex">
          <button className="btn btn-outline-primary px-4 me-4" onClick={() => setShow(true)}>
            New Conversation
          </button>
          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              className="border ms-2 me-2 text-light-grey font-smaller"
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
    <RadiologyLayout>
      <div className="p-5">
        <div className="card p-3 w-100">
          <Header />
          {/* Messages */}
          {messages.map((message: any, id) => {
            return <RadiologyMessage key={id} message={message} />;
          })}
          {show && <RadiologyMessagesModal show={show} handleClose={handleClose} />}
        </div>
      </div>
    </RadiologyLayout>
  );
};

export default Messages;
