import React from "react";
//icons
import { Warning } from "@styled-icons/ionicons-outline";
import { Stethoscope } from "@styled-icons/zondicons";
import { CalendarAlt } from "@styled-icons/boxicons-regular";
import { TextBulletListSquare } from "@styled-icons/fluentui-system-regular";
import { XRay } from "@styled-icons/fa-solid";

const PatientSidebar = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item bg-primary-light text-primary text-center fw-bold">
        Summary Visits
      </li>
      <li className="list-group-item border-bottom">
        <Warning className="icon-height text-dark me-2" /> Active Problems
      </li>
      <li className="list-group-item border-bottom">
        <Stethoscope className="icon-height text-dark me-2" /> Diagnosis
      </li>
      <li className="list-group-item border-bottom">
        <CalendarAlt className="icon-height text-dark me-2" /> Visits
      </li>
      <li className="list-group-item border-bottom">
        <TextBulletListSquare className="icon-height text-dark me-2" /> Tests
      </li>
      <li className="list-group-item border-bottom">
        <XRay className="icon-height text-dark me-2" /> Imaging Orders
      </li>
      <li className="list-group-item border-bottom">
        <XRay className="icon-height text-dark me-2" /> Allergies
      </li>
    </ul>
  );
};

export default PatientSidebar;
