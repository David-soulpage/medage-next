import React, { FC, useState } from "react";

//lodash
import _ from "lodash";
//react bootstrap
import { Modal } from "react-bootstrap";
//icons
import { ThreeDotsVertical } from "@styled-icons/bootstrap";
import { Attach } from "@styled-icons/evaicons-solid";
import { Messages } from "@styled-icons/typicons";
import { CommonModal } from "@components/modal";

const Tasks: FC = () => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState(null);

  const handleClose = () => {
    setShow(false);
  };
  //Somple Tasks
  const data = [
    {
      title: "Meeting with Doctor John",
      attachment: 4,
      messages: 5,
      status: "done",
    },
    {
      title: "Design new dashboard",
      attachment: 4,
      messages: 5,
      status: "pending",
    },
    {
      title: "Scanning search",
      attachment: 4,
      messages: 5,
      status: "hold",
    },
    {
      title: "Fix issues",
      attachment: 4,
      messages: 5,
      status: "done",
    },
    {
      title: "Budget and contract",
      attachment: 4,
      messages: 5,
      status: "pending",
    },
    {
      title: "Search for a Medications",
      attachment: 4,
      messages: 5,
      status: "hold",
    },
    {
      title: "Budget and contract",
      attachment: 4,
      messages: 5,
      status: "done",
    },
  ];
  return (
    <>
      {_.map(data, (item, id) => (
        <div
          key={id}
          onClick={() => {
            setTask(item);
            setShow(true);
          }}
          className="card px-3 py-1 mt-3 border border-1 border-radius-10"
        >
          <div className="row d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="col-md-8 col-12 d-flex align-items-center">
              <input type="checkbox" />
              <h6 className="title m-0 ms-2 w-50">{item.title}</h6>
              <h6 className="title m-0">!</h6>
            </div>
            <div className="col-md-4 col-12 d-flex align-items-center justify-content-md-end justify-content-start">
              <span>
                <Attach className="text-dark" size="20" /> {item.attachment}
              </span>
              <span className="mx-3">
                <Messages className="text-dark" size="20" /> {item.messages}
              </span>
              <button
                className={
                  item.status === "done"
                    ? `btn btn-sm  mr-3 bg-light-success text-success me-3 fw-bold`
                    : item.status === "pending"
                    ? `btn btn-sm  mr-3 bg-light-warning text-warning me-3 fw-bold`
                    : `btn btn-sm  mr-3 btn bg-light text-muted me-3 fw-bold`
                }
              >
                {item.status === "done"
                  ? `Done`
                  : item.status === "pending"
                  ? `Pending`
                  : `On Hold`}
              </button>
              <img
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
                alt="Profile Image"
                height="50px"
                width="50px"
                className="rounded img-fit"
              />
            </div>
          </div>
        </div>
      ))}
      {/* Task Modal */}
      <CommonModal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <h6 className="title m-0">New Task</h6>
            <ThreeDotsVertical className="text-dark" size="20" />
          </div>
        </Modal.Header>
        <Modal.Body>
          <h5 className="title">{task && task.title}</h5>
          <p className="m-0 sub-title text-light">Date</p>
          <div className="border-top my-3" />
          <p className="m-0 sub-title text-light">Description</p>
          <div className="border-top my-5" />
        </Modal.Body>
        <Modal.Footer className="bg-secondary d-flex justify-content-start">
          <Attach className="text-dark" size="20" />
          <span className="mx-3 title">
            <input type="checkbox" /> <small>Mark as Completed</small>
          </span>
          <button className="btn btn-primary btn-sm text-white">Submit</button>
        </Modal.Footer>
      </CommonModal>
    </>
  );
};

export default Tasks;
