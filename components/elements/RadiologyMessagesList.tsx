// react
import React, { FC } from "react";
// next
import Link from "next/link";
// components
import MessagesCard from "@components/card/MessagesCard";
// react boostrap
import { Dropdown } from "react-bootstrap";

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
          <div className="btn btn-sm bg-white btn-outline-primary text-base-black fw-light">
            New Message
          </div>

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
    </div>
  );
};
export default RadiologyMessagesList;
