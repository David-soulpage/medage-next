import React from "react";
//icons
import { Warning } from "@styled-icons/ionicons-outline";
import { Stethoscope } from "@styled-icons/zondicons";
import { CalendarAlt } from "@styled-icons/boxicons-regular";
import { TextBulletListSquare } from "@styled-icons/fluentui-system-regular";
import { XRay } from "@styled-icons/fa-solid";
import { Microgenetics } from "@styled-icons/simple-icons";
import { Doctor } from "@styled-icons/fluentui-system-regular";
import { Capsule } from "@styled-icons/remix-line";
import { UserGroup } from "@styled-icons/heroicons-outline";
import { Contacts } from "@styled-icons/typicons";

const PatientSidebar = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item bg-light-primary text-primary text-center fw-bold py-3 d-none d-lg-block">
        Summary Visits
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Warning className="icon-height text-dark me-2" />{" "}
        <span className="d-none d-lg-block mx-2">Active Problems</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Stethoscope className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Diagnosis</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <CalendarAlt className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Visits</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <TextBulletListSquare className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Tests</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <XRay className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Imaging Orders</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Microgenetics className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Allergies</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Doctor className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Medications</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Capsule className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Pharmacy</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <UserGroup className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Family History</span>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Contacts className="icon-height text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Emergency Contacts</span>
      </li>
    </ul>
  );
};

export default PatientSidebar;
