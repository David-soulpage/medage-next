import React from "react";
import { useRouter } from "next/router";
//icons
import { Dashboard } from "@styled-icons/material-outlined";
import { ClipboardList } from "@styled-icons/heroicons-outline";
import { TextBulletListSquare } from "@styled-icons/fluentui-system-regular";
import { DocumentOnePage } from "@styled-icons/fluentui-system-regular";
import { CalendarAlt } from "@styled-icons/boxicons-regular";
import { Googleanalytics } from "@styled-icons/simple-icons";
//lodash
import _ from "lodash";

const Sidebar = () => {
  const router = useRouter();
  const data = [
    {
      name: "Dashboard",
      icon: <Dashboard size="20" className="text-dark me-2" />,
      route: "dashboard",
    },
    {
      name: "Appointments",
      icon: <ClipboardList size="20" className="text-dark me-2" />,
      route: "appointment",
    },
    {
      name: "Tasks",
      icon: <TextBulletListSquare size="20" className="text-dark me-2" />,
      route: "tasks",
    },
    {
      name: "Reports",
      icon: <DocumentOnePage size="20" className="text-dark me-2" />,
      route: "reports",
    },
    {
      name: "Calendar",
      icon: <CalendarAlt size="20" className="text-dark me-2" />,
      route: "",
    },
    {
      name: "Analytics",
      icon: <Googleanalytics size="20" className="text-dark me-2" />,
      route: "analytics",
    },
  ];
  return (
    <ul className="list-group">
      {_.map(data, (item, id) => (
        <li
          key={id}
          onClick={() => router.push(`/doctor/1/${item.route}`)}
          className="list-group-item cr-p d-flex justify-content-center justify-content-lg-start align-items-center"
        >
          {item.icon}
          <span className="d-none d-lg-block mx-2">{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
