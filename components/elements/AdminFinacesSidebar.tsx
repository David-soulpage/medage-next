// react
import React, { FC, useState, useEffect } from "react";
// styled-icons
import { Bill } from "components/styled-icons/";
import ActiveLink from "./ActiveLink";
// next
import { useRouter } from "next/router";
//icons
import {
  Stethoscope,
  UserNurse,
  SettingsApplications,
  FlowTree,
  Hr,
  SlideSettings,
  Support,
  Bed,
  ElectricalServices,
  Monitor,
  PageEdit,
  Payments,
  ExchangeDollar,
  ChartLine,
  Calendar,
  LineChartDown,
} from "components/styled-icons";

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
      icon: PageEdit,
      route: "live-claims-feed",
    },
    {
      name: "Patient Payments",
      icon: Payments,
      route: "patient-payments",
    },

    {
      name: "Transactions",
      icon: ExchangeDollar,
      route: "transactions",
    },
    {
      name: "Expenditures",
      icon: ChartLine,
      route: "expenditures",
    },
    {
      name: "Fee Schedule",
      icon: Calendar,
      route: "fee-schedule",
    },
    {
      name: "Underpaid Items",
      icon: LineChartDown,
      route: "underpaid-items",
    },
  ];

  const data2 = [
    {
      name: "Hospital Stretchers",
      icon: Bed,
      route: "hospital-stretchers",
    },
    {
      name: "Beds",
      icon: Bed,
      route: "beds",
    },
    {
      name: "Defibrillators",
      icon: ElectricalServices,
      route: "defibrillators",
    },
    {
      name: "Anesthesia Machines",
      icon: Bill,
      route: "anesthesia-machines",
    },
    {
      name: "Patient Monitors",
      icon: Monitor,
      route: "patient-monitors",
    },
  ];

  const data3 = [
    {
      name: "Doctors",
      icon: Stethoscope,
      route: "doctors",
    },
    {
      name: "Nurses",
      icon: UserNurse,
      route: "nurse",
    },
    {
      name: "Administration",
      icon: SettingsApplications,
      route: "administration",
    },
    {
      name: "IT",
      icon: SlideSettings,
      route: "it",
    },
    {
      name: "Billing",
      icon: Bill,
      route: "billing",
    },
    {
      name: "Support",
      icon: Support,
      route: "support",
    },
    {
      name: "Leadership",
      icon: FlowTree,
      route: "leadership",
    },
    {
      name: "HR Team",
      icon: Hr,
      route: "team",
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
      <ul className="list-group m-0">
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
