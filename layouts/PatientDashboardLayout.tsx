import React, { FC } from "react";
import { Header } from "../components/elements";

interface IProps {
  children: any;
}

const PatientDashboardLayout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <div className="doctor-dashboard-grid-wrapper">
        <div className="doctor-dashboard-grid-header">
          <Header />
        </div>
        <div className="doctor-dashboard-left-sidebar">
          <h5>SideBar</h5>
        </div>
        <div className="doctor-dashboard-grid-main">{children}</div>
      </div>
    </div>
  );
};

export default PatientDashboardLayout;
