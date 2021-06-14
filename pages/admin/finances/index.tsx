// react
import React, { FC, useState } from "react";
// components
import { AdminNavbar, BillingSummary, Header, LiveClaimsFeed } from "components/elements";
import AdminFinancesSidebar from "components/elements/AdminFinacesSidebar";
import AdminSidebar from "components/elements/AdminFinacesSidebar";
import AdminFinancesExpenditure from "components/elements/AdminFinancesExpenditure";

interface IProps {}

const AdminFinances: FC<IProps> = (props) => {
  const [selectedSideItem, setSelectedSideItem] = useState("Live Claims Feed");

  const onPressSideItem = (name) => {
    console.log(name, "name");
    setSelectedSideItem(name);
  };

  const RenderSelectedSideItemContent = () => {
    switch (selectedSideItem) {
      case "Billing Summary":
        return <BillingSummary />;
      case "Live Claims Feed":
        return <LiveClaimsFeed />;
      case "Expenditures":
        return <AdminFinancesExpenditure />;
      default:
        return <LiveClaimsFeed />;
    }
  };

  return (
    <div>
      <div className="admin-dashboard-grid-wrapper">
        <div className="doctor-dashboard-grid-header">
          <Header />
          <AdminNavbar />
        </div>
        <div className="admin-dashboard-left-sidebar mt-5 bg-white h-100">
          <AdminSidebar onPressItem={onPressSideItem} />
        </div>
        <div className="admin-dashboard-grid-main bg-grey-two">
          <div className="mt-5 bg-white mx-5">
            <RenderSelectedSideItemContent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFinances;
