import React from "react";
//local components
import { CommonCard } from "components/card";

const DashboardMessages = () => {
  return (
    <CommonCard>
      <div className="d-flex align-items-center">
        <div>
          <h6 className="fw-bold m-0">Messages (2 unread)</h6>
        </div>
        <div className="ms-auto">
          <button className="btn btn-sm btn-outline-dark text-muted">Sort by</button>
        </div>
      </div>

      <div className="mt-4">
        <div className="card bg-light p-3 border-0">
          <div className="d-flex align-items-start">
            <div className="p-3 border rounded"></div>
            <div className="ms-3">
              <small className="m-0 d-block text-dark fw-bold">Helena Chavez</small>
              <small className="text-muted">How To Write Better Advertising Copy Examples</small>
            </div>
            <div className="ms-auto text-muted">
              <small className="fw-bold">24 May, 2021</small>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="card bg-light p-3 border-0">
          <div className="d-flex align-items-start">
            <div className="p-3 border rounded"></div>
            <div className="ms-3">
              <small className="m-0 d-block text-dark fw-bold">Helena Chavez</small>
              <small className="text-muted">How To Write Better Advertising Copy Examples</small>
            </div>
            <div className="ms-auto text-muted">
              <small className="fw-bold">24 May, 2021</small>
            </div>
          </div>
        </div>
      </div>
    </CommonCard>
  );
};

export default DashboardMessages;
