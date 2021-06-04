// react
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
        <Warning className="text-dark me-2" size="20" />{" "}
        <small className="d-none d-lg-block mx-2">Active Problems</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Stethoscope className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Diagnosis</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <CalendarAlt className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Visits</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <TextBulletListSquare className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Tests</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <XRay className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Imaging Orders</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Microgenetics className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Allergies</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Doctor className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Medications</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Capsule className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Pharmacy</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <UserGroup className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Family History</small>
      </li>
      <li className="list-group-item border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center">
        <Contacts className="text-dark me-2" size="20" />
        <small className="d-none d-lg-block mx-2">Emergency Contacts</small>
      </li>
    </ul>
  );
};

export default PatientSidebar;
