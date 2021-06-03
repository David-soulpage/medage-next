import React from "react";
//icons
import { Dashboard } from "@styled-icons/material-outlined";
import { ClipboardList } from "@styled-icons/heroicons-outline";
import { TextBulletListSquare } from "@styled-icons/fluentui-system-regular";
import { DocumentOnePage } from "@styled-icons/fluentui-system-regular";
import { CalendarAlt } from "@styled-icons/boxicons-regular";
import { Googleanalytics } from "@styled-icons/simple-icons";

const Sidebar = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item active d-flex justify-content-center justify-content-lg-start align-items-center">
        <Dashboard size="20" className="text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Dashboard</span>
      </li>
      <li className="list-group-item d-flex justify-content-center justify-content-lg-start align-items-center">
        <ClipboardList size="20" className="text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Patient Information</span>
      </li>
      <li className="list-group-item d-flex justify-content-center justify-content-lg-start align-items-center">
        <TextBulletListSquare size="20" className="text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Tasks</span>
      </li>
      <li className="list-group-item d-flex justify-content-center justify-content-lg-start align-items-center">
        <DocumentOnePage size="20" className="text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Reports</span>
      </li>
      <li className="list-group-item d-flex justify-content-center justify-content-lg-start align-items-center">
        <CalendarAlt size="20" className="text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Calendar</span>
      </li>
      <li className="list-group-item d-flex justify-content-center justify-content-lg-start align-items-center">
        <Googleanalytics size="20" className="text-dark me-2" />
        <span className="d-none d-lg-block mx-2">Analytics</span>
      </li>
    </ul>
  );
};

export default Sidebar;
