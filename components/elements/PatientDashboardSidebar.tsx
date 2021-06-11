// react
import { useState } from "react";

//icons
import { Dashboard } from "components/styled-icons";
import { ClipboardList } from "components/styled-icons";
import { DocumentOnePage } from "components/styled-icons";
import { CalendarAlt } from "components/styled-icons";
import { Group } from "components/styled-icons";
import { FormatLineSpacing } from "components/styled-icons";
import ActiveLink from "./ActiveLink";

const PatientDashboardSidebar = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const data = [
    {
      name: "Dashboard",
      icon: Dashboard,
      route: "dashboard",
    },
    {
      name: "Patient Information",
      icon: ClipboardList,
      route: "patient-information",
    },
    {
      name: "Doctors",
      icon: Group,
      route: "doctor-list",
    },
    {
      name: "Reports",
      icon: DocumentOnePage,
      route: "reports",
    },
    {
      name: "Problems List",
      icon: FormatLineSpacing,
      route: "problem-list",
    },

    {
      name: "Calendar",
      icon: CalendarAlt,
      route: "calendar",
    },
  ];

  const onClickItem = (index) => {
    setSelectedItemIndex(index);
  };
  return (
    <ul className="list-group">
      {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <ActiveLink href={item.route} key={index}>
            <li
              key={index}
              className={` list-group-item cr-p d-flex justify-content-center justify-content-lg-start align-items-center`}
            >
              <Icon size="20" className={`me-2`} />
              <span>{item.name}</span>
            </li>
          </ActiveLink>
        );
      })}
    </ul>
  );
};

export default PatientDashboardSidebar;
