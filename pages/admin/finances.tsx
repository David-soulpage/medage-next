// react
import React, { FC, useState } from "react";
// components
import { AdminNavbar, BillingSummary, Header, LiveClaimsFeed } from "components/elements";
import AdminFinancesSidebar from "components/elements/AdminFinacesSidebar";

interface IProps {}

const AdminFinances: FC<IProps> = (props) => {
  const [selectedSideItem, setSelectedSideItem] = useState("Live Claims Feed");

  const onPressSideItem = (name) => {
    setSelectedSideItem(name);
  };

  const RenderSelectedSideItemContent = () => {
    switch (selectedSideItem) {
      case "Billing Summary":
        return <BillingSummary />;
      case "Live Claims Feed":
        return <LiveClaimsFeed />;
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
          <AdminFinancesSidebar onPressItem={onPressSideItem} />
        </div>
        <div className="admin-dashboard-grid-main bg-grey-two">
          <div className="h-100 mt-5 bg-white mx-5">
            {selectedSideItem}
            {<RenderSelectedSideItemContent />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminFinances;
