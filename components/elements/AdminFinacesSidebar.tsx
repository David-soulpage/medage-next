// react
import React, { FC, useState, useEffect } from "react";
// styled-icons
import { Bill } from "components/styled-icons/";
import { useRouter } from "next/router";

interface IProps {
  onPressItem: (name: string) => void;
}

const AdminFinancesSidebar: FC<IProps> = (props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const router = useRouter();
  const data = [
    {
      name: "Billing Summary",
      icon: Bill,
      route: "",
    },
    {
      name: "Live Claims Feed",
      icon: Bill,
      route: "",
    },
    {
      name: "Patient Payments",
      icon: Bill,
      route: "",
    },
    {
      name: "Tasks",
      icon: Bill,
      route: "",
    },
    {
      name: "Transactions",
      icon: Bill,
      route: "",
    },
    {
      name: "Expenditures",
      icon: Bill,
      route: "",
    },
    {
      name: "Fee Schedule",
      icon: Bill,
      route: "",
    },
    {
      name: "Underpaid Items",
      icon: Bill,
      route: "",
    },
    {
      name: "Human Resources",
      icon: Bill,
      route: "",
    },
    {
      name: "Calender",
      icon: Bill,
      route: "",
    },
  ];

  return (
    <div>
      <ul className="list-group">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className={` list-group-item cr-p d-flex justify-content-center justify-content-lg-start align-items-center py-3 ${
                index === selectedItemIndex ? "bg-light-primary" : "bg-white"
              }`}
            >
              <div className="me-3">
                <Icon
                  size="20"
                  className={` ${selectedItemIndex === index ? "text-primary" : "text-base-black"}`}
                />
              </div>
              <div>
                <span className={index === selectedItemIndex ? "text-primary" : "text-base-black"}>
                  {item.name}
                </span>
              </div>
              <div className="bg-light-grey" style={{ height: 2 }}>
                {" "}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AdminFinancesSidebar;
