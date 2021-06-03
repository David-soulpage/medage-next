import React, { FC } from "react";
//React Circular Progress
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Appointments: FC = () => {
  const Progress = ({ progress, color, title }) => (
    <div className="d-flex align-items-center">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        strokeWidth={3}
        styles={buildStyles({
          textColor: color,
          pathColor: color,
        })}
        className="w-50 me-3"
      />
      <h6 className="title m-0">{title}</h6>
    </div>
  );
  return (
    <div>
      <h6 className="title">Total Number of Appointments</h6>
      {/* Appointments Circular Progress */}
      <div className="d-flex justify-content-between mt-5">
        <Progress progress={46} color="#0062FF" title="online" />
        <Progress progress={74} color="#3DD598" title="offline" />
        <Progress progress={14} color="#FF974A" title="online" />
      </div>
      <div className="mt-5">
        <small className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris.
        </small>
      </div>
    </div>
  );
};

export default Appointments;
