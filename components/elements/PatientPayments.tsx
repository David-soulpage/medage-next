import React from "react";
//local components
import { CommonCard } from "components/card";
// react circular progressbar
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PatientPayments = () => {
  return (
    <>
      <CommonCard>
        <h6 className="m-0">Patient Payments</h6>
        <div className="mt-3 d-flex flex-column align-items-center">
          <CircularProgressbar
            value={89}
            text={`89%`}
            styles={buildStyles({
              pathColor: "#4FCE89",
              textColor: "#000",
            })}
            strokeWidth={5}
            className="w-50"
          />
          <CircularProgressbar
            value={89}
            text={`89%`}
            styles={buildStyles({
              pathColor: "#4FCE89",
              textColor: "#000",
            })}
            strokeWidth={5}
            className="w-50 mt-3"
          />
        </div>
      </CommonCard>
    </>
  );
};

export default PatientPayments;
