// react
import React from "react";
// next
import { useRouter } from "next/router";
//icons
import { Dashboard } from "@styled-icons/material-outlined";
import { ClipboardList } from "@styled-icons/heroicons-outline";
import { DocumentOnePage } from "@styled-icons/fluentui-system-regular";
import { CalendarAlt } from "@styled-icons/boxicons-regular";
import { Group } from "@styled-icons/material";
//lodash
import _ from "lodash";

const PatientDashboardSidebar = () => {
  const router = useRouter();
  const data = [
    {
      name: "Dashboard",
      icon: <Dashboard size="20" className="text-dark me-2" />,
      route: "",
    },
    {
      name: "Patient Information",
      icon: <ClipboardList size="20" className="text-dark me-2" />,
      route: "",
    },
    {
      name: "Doctors",
      icon: <Group size="20" className="text-dark me-2" />,
      route: "",
    },
    {
      name: "Reports",
      icon: <DocumentOnePage size="20" className="text-dark me-2" />,
      route: "",
    },
    {
      name: "Problems List",
      icon: <DocumentOnePage size="20" className="text-dark me-2" />,
      route: "",
    },

    {
      name: "Calendar",
      icon: <CalendarAlt size="20" className="text-dark me-2" />,
      route: "",
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

export default PatientDashboardSidebar;
