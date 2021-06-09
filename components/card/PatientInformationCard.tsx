// react
import React, { FC, useState } from "react";
// styled icons
import { AccountBox } from "@styled-icons/material-rounded";
// forms
import { PatientPersonal } from "@components/forms";
import PatientFamily from "@components/forms/PatientFamily";

interface IProps {}

const PatientInformationCard: FC<IProps> = (props) => {
  const [info, setInfo] = useState("personal");

  const PersonalInfo = () => {
    return (
      <div>
        <AccountBox size="150" />
        <PatientPersonal />
      </div>
    );
  };

  const FamilyInfo = () => {
    return (
      <div className="mt-4">
        <PatientFamily />
      </div>
    );
  };

  const handleClick = (value) => {
    setInfo(value);
  };

  return (
    <div className="card border-0 shadow-sm p-4  d-flex flex-column bg-white ">
      <div className="d-flex flex-row align-items-center w-50">
        <div className="me-5" onClick={() => handleClick("personal")}>
          <small className="fw-bold text-base-black">Personal Information</small>

          <div
            className={`rounded mt-2 ${info === "personal" ? "bg-primary" : "bg-white"}`}
            style={{ height: 2 }}
          ></div>
        </div>
        <div onClick={() => handleClick("family")}>
          <small className="fw-bold text-base-black">Family Information</small>
          <div
            className={`rounded mt-2 ${info !== "personal" ? "bg-primary" : "bg-white"}`}
            style={{ height: 2 }}
          ></div>
        </div>
      </div>
      <div className="bg-light-grey-two" style={{ height: 1 }}></div>
      {info === "personal" ? <PersonalInfo /> : <FamilyInfo />}
    </div>
  );
};
export default PatientInformationCard;
