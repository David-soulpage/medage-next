// react
import React, { FC, useState } from "react";
// formik
import { useFormik } from "formik";
// boostrap
import { Modal, Form, Dropdown } from "react-bootstrap";
// lodash
import _ from "lodash";
// styled icons
import { Attachment, Cross } from "@styled-icons/entypo";
// components
import RadiologyMessage from "@components/elements/RadiologyMessage";

const Messages: FC = () => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      subject: "",
      message: "",
    },
    onSubmit: (values) => console.log(values),
  });

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
  return (
    <>
      <div className="p-5">
        <div className="card p-3 w-100">
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
          {/* Messages */}
          {_.map(messages, (message: any, id) => {
            return <RadiologyMessage key={id} message={message} />;
          })}
        </div>
        <Modal show={show} onHide={handleClose} centered className="rounded">
          <form onSubmit={formik.handleSubmit}>
            <Modal.Header>
              <h6 className="text-base-black fw-bold">New message</h6>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="btn btn-secondary ">
                  Shane Warne <Cross size="15" className="text-light-purple" />
                </div>
              </div>
              <div>
                <Form.Group>
                  <Form.Control
                    placeholder="Subject"
                    className="mt-3 input-height input-border-bottom text-light-grey"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    name="subject"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    placeholder="Your message"
                    className="mt-3 input-height input-border-bottom input-textarea text-light-grey"
                    as="textarea"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    name="message"
                  />
                </Form.Group>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-start">
              <Attachment size="15" className="text-light-purple" />
              <button className="btn fw-bold" type="button" onClick={handleClose}>
                Close
              </button>
              <button
                className="btn btn-primary rounded text-white"
                type="submit"
                onClick={handleClose}
              >
                Save Changes
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Messages;
