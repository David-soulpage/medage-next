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
      <li className="list-group-item active">
        <Dashboard className="icon-height text-dark me-2" /> Dashboard
      </li>
      <li className="list-group-item">
        <ClipboardList className="icon-height text-dark me-2" /> Patient Information
      </li>
      <li className="list-group-item">
        <TextBulletListSquare className="icon-height text-dark me-2" /> Tasks
      </li>
      <li className="list-group-item">
        <DocumentOnePage className="icon-height text-dark me-2" /> Reports
      </li>
      <li className="list-group-item">
        <CalendarAlt className="icon-height text-dark me-2" /> Calendar
      </li>
      <li className="list-group-item">
        <Googleanalytics className="icon-height text-dark me-2" /> Analytics
      </li>
    </ul>
  );
};

export default Sidebar;
