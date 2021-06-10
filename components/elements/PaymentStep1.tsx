import React, { FC } from "react";

import { AnyNsRecord } from "dns";

interface IPayProps {
  nextStep: any;
}

const PaymentStep1: FC<IPayProps> = ({ nextStep }) => {
  const plans = [
    {
      name: "Basic",
      description: "Lorem ipsum",
      rate: "19$",
    },
    {
      name: "Basic",
      description: "Lorem ipsum",
      rate: "19$",
    },
    {
      name: "Basic",
      description: "Lorem ipsum",
      rate: "19$",
    },
  ];

  return (
    <div>
      <div className="my-3">
        <small className="text-muted">
          Please select the amounts you wish to pay below. If you are unable to now, you can pay
          later.
        </small>
      </div>
      <div className="border-top py-4">
        <h6>Pay for this Visit</h6>
        <small className="text-muted">Select a amount</small>
        <div className="row my-4">
          {plans.map((plan, id) => (
            <div key={id} className="col-lg-4">
              <div className="card h-100 shadow-sm p-4">
                <div className="d-flex align-items-center">
                  <input type="radio" />
                  <div className="d-flex flex-column ms-3">
                    <h6>{plan.name}</h6>
                    <small className="text-muted">{plan.description}</small>
                  </div>
                  <h6 className="ms-auto">{plan.rate}/week</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary text-white" onClick={nextStep}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentStep1;
