// react
import React, { FC, useState, useEffect } from "react";
// styled-icons
import { Bill } from "components/styled-icons/";
import ActiveLink from "./ActiveLink";
// next
import { useRouter } from "next/router";

interface IProps {}

const AdminSidebar: FC<IProps> = (props) => {
  const router = useRouter();

  const data = [
    {
      name: "Billing Summary",
      icon: Bill,
      route: "billing-summary",
    },
    {
      name: "Live Claims Feed",
      icon: Bill,
      route: "live-claims-feed",
    },
    {
      name: "Patient Payments",
      icon: Bill,
      route: "patient-payments",
    },

    {
      name: "Transactions",
      icon: Bill,
      route: "transactions",
    },
    {
      name: "Expenditures",
      icon: Bill,
      route: "expenditures",
    },
    {
      name: "Fee Schedule",
      icon: Bill,
      route: "fee-schedule",
    },
    {
      name: "Underpaid Items",
      icon: Bill,
      route: "underpaid-items",
    },
  ];

  const data2 = [
    {
      name: "Hospital Stretchers",
      icon: Bill,
      route: "",
    },
    {
      name: "Beds",
      icon: Bill,
      route: "",
    },
    {
      name: "Defibrillators",
      icon: Bill,
      route: "",
    },
    {
      name: "Anesthesia Machines",
      icon: Bill,
      route: "",
    },
    {
      name: "Patient Monitors",
      icon: Bill,
      route: "",
    },
  ];

  const data3 = [
    {
      name: "Doctors",
      icon: Bill,
      route: "",
    },
    {
      name: "Nurses",
      icon: Bill,
      route: "",
    },
    {
      name: "Administration",
      icon: Bill,
      route: "",
    },
    {
      name: "IT",
      icon: Bill,
      route: "",
    },
    {
      name: "Billing",
      icon: Bill,
      route: "",
    },
    {
      name: "Support",
      icon: Bill,
      route: "",
    },
    {
      name: "Leadership",
      icon: Bill,
      route: "",
    },
    {
      name: "HR Team",
      icon: Bill,
      route: "",
    },
  ];

  const data4 = [
    {
      name: "Form Builder",
      icon: Bill,
      route: "",
    },
  ];

  return (
    <div>
      <ul className="list-group">
        {(router.pathname.includes("finances")
          ? data
          : router.pathname.includes("inventory")
          ? data2
          : router.pathname.includes("hr")
          ? data3
          : router.pathname.includes("form")
          ? data4
          : []
        ).map((item, index) => {
          const Icon = item.icon;
          return (
            <ActiveLink href={item.route} key={index}>
              <li
                key={index}
                className={` list-group-item cr-p d-flex justify-content-center justify-content-lg-start align-items-center py-3 `}
              >
                <div className="me-3">
                  <Icon size="20" />
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
                <div className="bg-light-grey" style={{ height: 2 }}>
                  {" "}
                </div>
              </li>
            </ActiveLink>
          );
        })}
      </ul>
    </div>
  );
};
export default AdminSidebar;
