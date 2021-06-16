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
        <div className="admin-dashboard-left-sidebar mt-5 bg-white h-100">
          <AdminSidebar />
        </div>
        <div className="admin-dashboard-grid-main bg-grey-two">
          <div className="container pt-5">{children}</div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
