import React from "react";
//next
import Link from "next/link";
//icons
import { Dashboard } from "components/styled-icons";
import { ClipboardList } from "components/styled-icons";
import { TextBulletListSquare } from "components/styled-icons";
import { DocumentOnePage } from "components/styled-icons";
import { CalendarAlt } from "components/styled-icons";
import { Googleanalytics } from "components/styled-icons";

const Sidebar = () => {
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
      {data.map((item, id) => (
        <Link key={id} href={`${item.route}`}>
          <li className="list-group-item cr-p d-flex justify-content-center justify-content-lg-start align-items-center">
            {item.icon}
            <span className="d-none d-lg-block mx-2">{item.name}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Sidebar;
