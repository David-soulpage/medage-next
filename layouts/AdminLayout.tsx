// react
import React, { FC } from "react";
//local components
import { AdminNavbar, Header } from "components/elements";
import AdminSidebar from "components/elements/AdminFinacesSidebar";

interface IAdminProps {
  children: any;
}

const AdminLayout: FC<IAdminProps> = ({ children }) => {
  return (
    <>
      <div className="admin-dashboard-grid-wrapper">
        <div className="doctor-dashboard-grid-header">
          <Header />
          <AdminNavbar />
        </div>
        <div className="admin-dashboard-left-sidebar">
          <AdminSidebar />
        </div>
        <div className="admin-dashboard-grid-main">
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
