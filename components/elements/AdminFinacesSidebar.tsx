// react
import React, { FC, useState, useEffect } from "react";
// styled-icons
import { Bill } from "components/styled-icons/";
import { useRouter } from "next/router";

interface IProps {
  onPressItem?: (name: string) => void;
}

const AdminSidebar: FC<IProps> = (props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [items, setItems] = useState([]);
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
  const onClickItem = (index) => {
    setSelectedItemIndex(index);
    props.onPressItem(data[index]["name"]);
  };

  return (
    <div>
      <ul className="list-group">
        {(router.pathname.includes("finances")
          ? data
          : router.pathname.includes("inventory")
          ? data2
          : router.pathname.includes("hr")
          ? data3
          : []
        ).map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={` list-group-item cr-p d-flex justify-content-center justify-content-lg-start align-items-center py-3 ${
                index === selectedItemIndex ? "bg-light-primary" : "bg-white"
              }`}
              onClick={() => onClickItem(index)}
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
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default AdminSidebar;
