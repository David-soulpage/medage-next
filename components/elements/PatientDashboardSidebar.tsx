// react
import React, { useEffect, useState } from "react";
// next
import { useRouter } from "next/router";
//icons
import { Dashboard } from "@styled-icons/material-outlined";
import { ClipboardList } from "@styled-icons/heroicons-outline";
import { DocumentOnePage } from "@styled-icons/fluentui-system-regular";
import { CalendarAlt } from "@styled-icons/boxicons-regular";
import { Group } from "@styled-icons/material";
import { FormatLineSpacing } from "@styled-icons/material-outlined";

//lodash
import _ from "lodash";

const PatientDashboardSidebar = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const router = useRouter();
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

  useEffect(() => {
    const pathName = router.pathname;
    data.map((ele, index) => {
      console.log(pathName.includes(ele["route"]), "pathName");
      if (pathName.includes(ele["route"])) {
        setSelectedItemIndex(index);
      }
    });
  }, [router.pathname]);

  const onClickItem = (index) => {
    setSelectedItemIndex(index);
  };
  return (
    <ul className="list-group">
      {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <li
            key={index}
            onClick={() => {
              router.push(`/patient/1/${item.route}`);
              onClickItem(index);
            }}
            className={` list-group-item cr-p d-flex justify-content-center justify-content-lg-start align-items-center ${
              index === selectedItemIndex ? "bg-light-primary" : "bg-white"
            }`}
          >
            <Icon
              size="20"
              className={`me-2 ${selectedItemIndex === index ? "text-primary" : "text-base-black"}`}
            />
            <span className={index === selectedItemIndex ? "text-primary" : "text-base-black"}>
              {item.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default PatientDashboardSidebar;
