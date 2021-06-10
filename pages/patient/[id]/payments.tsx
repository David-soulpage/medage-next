import React, { useState } from "react";
//local components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { CommonCard } from "components/card";
import {
  Medication,
  PaymentStep1,
  PaymentStep2,
  Questions,
  SignDocuments,
} from "components/elements";
//lodash
import _ from "lodash";

const Payments = () => {
  const [step, setStep] = useState(1);
  const [current, setCurrent] = useState("payment");

  //next Step
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <PatientDashboardLayout>
      <div className="container pt-2">
        <h6 className="fw-bold">Payments</h6>
        <CommonCard>
          <div className="d-flex justify-content-between border-bottom">
            <h6 className="border-bottom border-primary m-0">Payments</h6>
            <h6>Medications</h6>
            <h6>Questionaries</h6>
            <h6>Sign Documents</h6>
          </div>
          {
            {
              payment: (
                <div>
                  {
                    {
                      1: <PaymentStep1 nextStep={nextStep} />,
                      2: <PaymentStep2 setCurrent={setCurrent} />,
                    }[step]
                  }
                </div>
              ),
              medication: (
                <div>
                  <Medication setCurrent={setCurrent} />
                </div>
              ),
              questions: <Questions setCurrent={setCurrent} />,
              documents: <SignDocuments />,
            }[current]
          }
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};

export default Payments;
