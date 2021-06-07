// react
import React, { FC, useState } from "react";
// next
import Link from "next/link";
// components
import MessagesCard from "@components/card/MessagesCard";
// react boostrap
import { Dropdown } from "react-bootstrap";
import RadiologyMessagesModal from "@components/modal/RadiologyMessagesModal";

const messagesList = [
  {
    name: "Helena Chavez",
    description: "How To Write Better Advertising Copy Examples",
    date: "15th Apr 2021, 11:52 AM",
  },

  {
    name: "Helena Chavez",
    description: "How To Write Better Advertising Copy Examples",
    date: "15th Apr 2021, 11:52 AM",
  },
];

const RadiologyMessagesList: FC = () => {
  const [showModal, setModalStatus] = useState(false);
  const Header = () => {
    return (
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h6 className="fw-bolder m-0 text-base-black">
            Messages
            <span className="text-base-black fw-normal ms-2">(2 unread)</span>{" "}
          </h6>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-secondary text-dark"
            onClick={() => setModalStatus(true)}
          >
            + New Message
          </button>

          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              className="border ms-2 me-2 text-light-grey font-smaller"
            >
              Sort by
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

  const handleClose = () => {
    setModalStatus(false);
  };
  const Footer = () => {
    return (
      <div className="ms-auto mt-3">
        <Link href="/radiology/study  ">
          <h6 className="text-primary ">View All</h6>
        </Link>
      </div>
    );
  };

  const renderMessagesList = () => {
    return (
      <>
        {messagesList.map((ele, index) => {
          return <MessagesCard data={ele} key={index} />;
        })}
      </>
    );
  };

  return (
    <div className="card p-4 border-0 shadow-sm">
      <Header />
      {renderMessagesList()}
      <Footer />
      {showModal && <RadiologyMessagesModal show={showModal} handleClose={handleClose} />}
    </div>
  );
};
export default RadiologyMessagesList;
