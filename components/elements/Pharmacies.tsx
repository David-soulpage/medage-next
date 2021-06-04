import React from "react";
import { CommonCard } from "@components/card";
import _ from "lodash";

const Pharmacies = () => {
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
    <CommonCard>
      <h6 className="title m-0">Pharmacy</h6>
      <div className="row g-4 mt-4">
        {_.map(data, (item, id) => (
          <div key={id} className="col-md-4 col-12">
            <CommonCard>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <img
                    src={item.image}
                    alt="image"
                    height="50px"
                    width="50px"
                    className="rounded"
                  />
                  <div className="mx-3">
                    <h6 className="title">{item.title}</h6>
                    <p className="sub-title m-0">{item.address}</p>
                  </div>
                </div>

                <small className="sub-title">{item.time}</small>
              </div>
            </CommonCard>
          </div>
        ))}
      </div>
      <div className="border-top my-5"></div>
      <div className="d-flex align-items-center">
        <img
          src="https://images.unsplash.com/photo-1617881770125-6fb0d039ecde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
          alt="Image"
          height="50px"
          width="50px"
          className="rounded"
        />
        <h6 className="title m-0 mx-3">Gooddrugs.com</h6>
      </div>
      <div className="d-flex justify-content-between my-4">
        <div className="d-flex flex-column">
          <h6 className="sub-title m-0">
            <b>Patient Name:</b> <span>Shane Warne</span>
          </h6>
          <h6 className="sub-title m-0 my-3">
            <b>Scanning Center:</b> <span>Vijaya Diagnostic Center</span>
          </h6>
          <h6 className="sub-title m-0">
            <b>Reffering Doctor:</b> <span>Allen Willkins</span>
          </h6>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <h6 className="sub-title m-0 me-4">
              <b>DOB:</b> <span>16/12/2020</span>
            </h6>{" "}
            <h6 className="sub-title m-0">
              <b>Gender:</b> <span>Male</span>
            </h6>
          </div>
          <h6 className="sub-title m-0 my-4">
            <b>Date of Scan:</b> <span> 04/04/2021</span>
          </h6>
        </div>
      </div>
    </CommonCard>
  );
};

export default Pharmacies;
