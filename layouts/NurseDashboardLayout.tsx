import React, { FC } from "react";
import { AdminNavbar, Header } from "../components/elements";

interface IProps {
  children: any;
}

const NurseDashboardLayout: FC<IProps> = ({ children }) => {
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

export default NurseDashboardLayout;
