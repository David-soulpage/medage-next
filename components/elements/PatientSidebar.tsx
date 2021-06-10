// react
import React from "react";
//next
import Link from "next/link";
//icons
import { Warning } from "components/styled-icons";
import { Stethoscope } from "components/styled-icons";
import { CalendarAlt } from "components/styled-icons";
import { TextBulletListSquare } from "components/styled-icons";
import { XRay } from "components/styled-icons";
import { Microgenetics } from "components/styled-icons";
import { Doctor } from "components/styled-icons";
import { Capsule } from "components/styled-icons";
import { UserGroup } from "components/styled-icons";
import { Contacts } from "components/styled-icons";

const PatientSidebar = () => {
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
      name: "Tests",
      icon: TextBulletListSquare,
      route: "tests",
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
      name: "Family History",
      icon: UserGroup,
      route: "pharmacy",
    },
    {
      name: "Emergency Contacts",
      icon: Contacts,
      route: "emergency-contact",
    },
  ];
  return (
    <ul className="list-group">
      <li className="list-group-item bg-light-primary text-primary text-center fw-bold py-3 d-none d-lg-block">
        Summary Visits
      </li>
      {data.map((item, id) => {
        const Icon = item.icon;
        return (
          <Link href={`${item.route}`}>
            <li
              key={id}
              className={`list-group-item cr-p border-bottom py-3 d-flex justify-content-center justify-content-lg-start align-items-center`}
            >
              <Icon size="20" className={`me-2 `} />
              <small className={`d-none d-lg-block mx-2 `}>{item.name}</small>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default PatientSidebar;
