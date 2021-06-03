import React, { FC } from "react";
import { Header, PatientSidebar, Sidebar } from "../components/elements";

interface IProps {
  children: any;
}

const DoctorDashboardLayout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <div className="doctor-dashboard-grid-wrapper">
        <div className="doctor-dashboard-grid-header">
          <Header />
        </div>
        <div className="doctor-dashboard-left-sidebar">
          <Sidebar />
        </div>
        <div className="doctor-dashboard-grid-main">{children}</div>
      </div>
    </div>
  );
};

export default DoctorDashboardLayout;
