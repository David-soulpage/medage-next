// react
import React from "react";
//next
import Link from "next/link";
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
//lodash
import _ from "lodash";

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
      {_.map(data, (item, id) => {
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
