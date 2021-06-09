// react
import React, { FC } from "react";
//local components
import { AdminNavbar, Header } from "@components/elements";

interface IAdminProps {
  children: any;
}

const AdminLayout: FC<IAdminProps> = ({ children }) => {
  return (
    <>
      <div className="bg-light">
        <Header />
        <AdminNavbar />
        {children}
      </div>
    </>
  );
};
export default AdminLayout;
