// react
import React, { FC } from "react";
//next
import ActiveLink from "./ActiveLink";
//icons
import { Warning, Stethoscope } from "components/styled-icons";
import { CalendarAlt } from "components/styled-icons";
import { TextBulletListSquare } from "components/styled-icons";
import { XRay } from "components/styled-icons";
import { Microgenetics } from "components/styled-icons";
import { Doctor } from "components/styled-icons";
import { Capsule } from "components/styled-icons";
import { UserGroup } from "components/styled-icons";
import { Contacts, ToggleOff } from "components/styled-icons";

interface ISidebarProps {
  show: any;
  toggle: any;
}

const PatientSidebar: FC<ISidebarProps> = ({ show, toggle }) => {
  const data = [
    {
      name: "Active Problems",
      icon: Warning,
      route: "problems",
    },
    {
      name: "Diagnosis",
      icon: Stethoscope,
      route: "diagnosis",
    },
    {
      name: "Visits",
      icon: CalendarAlt,
      route: "visits",
    },
    {
      name: "Lab Orders",
      icon: TextBulletListSquare,
      route: "lab-orders",
    },
    {
      name: "Imaging Orders",
      icon: XRay,
      route: "tests",
    },
    {
      name: "Allergies",
      icon: Microgenetics,
      route: "allergies",
    },
    {
      name: "Medications",
      icon: Doctor,
      route: "medications",
    },
    {
      name: "Pharmacy",
      icon: Capsule,
      route: "pharmacy",
    },
    {
      name: "Care Team",
      icon: UserGroup,
      route: "care-team",
    },
    {
      name: "Emergency Contacts",
      icon: Contacts,
      route: "emergency-contact",
    },
  ];
  return (
    <ul className="list-group m-0">
      <li className="list-group-item fw-bold py-3 d-none d-lg-block border-bottom">
        <ToggleOff size="20" className="text-primary" /> Summary Visits
      </li>
      {data.map((item, id) => {
        const Icon = item.icon;
        return (
          <ActiveLink key={id} href={`${item.route}`}>
            <li
              className={`list-group-item cr-p border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center`}
            >
              <Icon size="20" className={`me-2 `} />
              <small className={`d-none d-lg-block mx-2 `}>{item.name}</small>
            </li>
          </ActiveLink>
        );
      })}
    </ul>
  );
};

export default PatientSidebar;
