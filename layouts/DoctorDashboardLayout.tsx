import React, { FC, useState } from "react";
import { AdminNavbar, Header, PatientSidebar, Sidebar } from "../components/elements";
import { useRouter } from "next/router";

interface IProps {
  children: any;
}

const DoctorDashboardLayout: FC<IProps> = ({ children }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="doctor-dashboard-grid-wrapper">
        <div className="doctor-dashboard-grid-header">
          <Header />
        </div>
        <div className="doctor-dashboard-grid-navbar">
          <AdminNavbar />
        </div>
        <div className="doctor-dashboard-left-sidebar">
          {router.pathname.includes("patient") ? (
            <PatientSidebar show={show} toggle={toggle} />
          ) : (
            <Sidebar />
          )}
        </div>
        <div className="doctor-dashboard-grid-main">{children}</div>
      </div>
    </div>
  );
};

export default DoctorDashboardLayout;
