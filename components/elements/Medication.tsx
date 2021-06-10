import React, { useState, FC } from "react";
//lodash
import _ from "lodash";
//local components
import { CommonModal } from "components/modal";
//react bootstrap
import { Form, Modal } from "react-bootstrap";
//icons
import { ThreeDotsVertical } from "@styled-icons/bootstrap";
import { Cross } from "@styled-icons/entypo";

interface IMedication {
  setCurrent: any;
}

const Medication: FC<IMedication> = ({ setCurrent }) => {
  const [show, setShow] = useState(false);
  const data = [
    {
      title: "Gooddrugs.com",
      address: "23, Green St, New york",
      time: "09am-10pm",
      image:
        "https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    },
    {
      title: "Gooddrugs.com",
      address: "23, Green St, New york",
      time: "09am-10pm",
      image:
        "https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    },
    {
      title: "Gooddrugs.com",
      address: "23, Green St, New york",
      time: "09am-10pm",
      image:
        "https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    },
    {
      title: "Gooddrugs.com",
      address: "23, Green St, New york",
      time: "09am-10pm",
      image:
        "https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    },
    {
      title: "Gooddrugs.com",
      address: "23, Green St, New york",
      time: "09am-10pm",
      image:
        "https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    },
  ];
  return (
    <div>
      <h6 className="my-3">Current Medication</h6>
      <small className="text-muted">
        Please review your medications and verify that the list is up to date.{" "}
        <span className="fw-bold text-dark">
          {" "}
          Call <span className="text-primary">911</span> if you have an emergency
        </span>
      </small>
      <div className="border-top py-4 mt-3">
        <small className="text-muted">You have no medications on file</small>
        <div className="d-flex border-primary border bg-light-primary p-4 justify-content-center align-items-center">
          <h6 className="fw-bold text-primary m-0">+ Add Medication</h6>
        </div>
        <h6 className="my-3">Select a Pharmacy for this visit</h6>
        <div className="row g-4 mt-4">
          {_.map(data, (item, id) => (
            <div key={id} className="col-md-4 col-12">
              <div className="card border shadow-sm p-3 rounded">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt="image"
                      height="50px"
                      width="50px"
                      className="rounded"
                    />
                    <div className="mx-3">
                      <h6 className="m-0">{item.title}</h6>
                      <small className="m-0 text-muted">{item.address}</small>
                    </div>
                  </div>

                  <small className="ms-auto">{item.time}</small>
                </div>
              </div>
            </div>
          ))}
          <div
            className=" col-md-4 col-12 p-3 d-flex align-items-center cr-p"
            onClick={() => setShow(true)}
          >
            <h6 className="text-primary">+ Add Pharmacy</h6>
          </div>
        </div>
        <div className="mt-4 d-flex">
          <button className="btn me-3">Cancel</button>
          <button className="btn btn-primary text-white" onClick={() => setCurrent("questions")}>
            Next
          </button>
        </div>
      </div>
      <CommonModal show={show} onHide={() => setShow(false)} centered={true}>
        <Modal.Header className="d-flex">
          <h6 className="m-0">Add Medication</h6>
          <ThreeDotsVertical className="ms-auto" size="20" />
        </Modal.Header>
        <Modal.Body>
          <Form.Control placeholder="Search Medication" />
          <div className="row mt-3">
            <div className="col-6">
              <div className="bg-light-primary text-primary p-2">
                Annaxicillan 500 mg <Cross size="20" />
              </div>
            </div>
            <div className="col-6">
              <div className="bg-light-warning text-warning p-2">
                Annaxicillan 500 mg <Cross size="20" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Additional Information</p>
            <Form.Control as="textarea" rows={4} />
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light d-flex justify-content-start">
          <button className="btn" onClick={() => setShow(false)}>
            Cancel
          </button>
          <button className="btn btn-primary text-white">Add</button>
        </Modal.Footer>
      </CommonModal>
    </div>
  );
};

export default Medication;
