import React, { FC, useState } from "react";
// modal
import AddTaskModal from "@components/modal/AddTaskModal";
//styled icons
import { CheckDouble, DotsVerticalRounded } from "@styled-icons/boxicons-regular";
import { Exclamation } from "styled-icons/bootstrap";
//lodash
import _ from "lodash";

const RadiologyTasks: FC = () => {
  const [show, setShow] = useState(false);
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

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="card p-3 border-0">
      {/* Task Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="title mb-0">Tasks</h6>
        <button className="btn btn-outline-secondary text-dark" onClick={() => setShow(true)}>
          + New Task
        </button>
      </div>
      {/* Tasks */}
      {_.map(tasks, (task, id) => {
        return (
          <div key={id} className="mt-4">
            <div className="d-flex align-items-center">
              <div className="p-2 border-0 rounded bg-light-primary ">
                <CheckDouble size="20" className="text-primary" />
              </div>
              <div className="ms-3">
                <div className="d-flex ">
                  <small className="m-0 d-block text-base-black fw-thin  me-5">{task.title}</small>
                  <Exclamation size="20" className="text-dark-red" />
                </div>

                <small className="text-base-black fw-bolder">{task.status}</small>
              </div>
              <div className="ms-auto d-flex align-items-center  ">
                <small className="fw-thin me-3 text-base-black">{task.date}</small>

                <DotsVerticalRounded size="20" />
              </div>
            </div>
          </div>
        );
      })}
      <AddTaskModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default RadiologyTasks;
