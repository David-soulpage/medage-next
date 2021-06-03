import React from "react";
import { AppointmentsList } from "@components/tables";
import CommonCard from "./CommonCard";

const AppointmentCard = () => {
  return (
    <CommonCard>
      <div className="d-flex align-items-center">
        <div>
          <h6 className="fw-bold m-0">Appointments</h6>
        </div>
        <div className="ms-3">
          <button className="btn btn-sm btn-outline-primary">Create Appiointment</button>
        </div>
        <div className="ms-auto">
          <input type="text" className="form-control bg-light border-0" placeholder="Search" />
        </div>
      </div>
      <div className="my-3">
        <AppointmentsList />
      </div>
    </CommonCard>
  );
};

export default AppointmentCard;
