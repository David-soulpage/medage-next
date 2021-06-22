import React, { FC, useState } from "react";
import { AdminNavbar, Header } from "../components/elements";
import { useRouter } from "next/router";
import { useAppContext } from "contexts/global";

interface IProps {
  children: any;
}

const DoctorLayout: FC<IProps> = ({ children }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="nurse-dashboard-grid-wrapper">
        <div className="nurse-dashboard-grid-header">
          <Header />
        </div>
        <div className="nurse-dashboard-grid-navbar">
          <AdminNavbar />
        </div>
        <div className="nurse-dashboard-grid-main">{children}</div>
      </div>
    </div>
  );
};

export default DoctorLayout;
