// components
import DashboardLeftNav from "components/dashboard/DashboardLeftNav";
import SignOutView from "@components/signOut";

const AdminLayout = (props: any) => {
  return (
    <>
      <div className="dashboard-grid-wrapper">
        <div className="dashboard-left-sidebar">
          <DashboardLeftNav />
        </div>
        <div className="dashboard-grid-header h-100 border border-start-0">
          <div className="d-flex px-3 h-100 align-items-center">
            <div className="ms-auto">
              <SignOutView />
            </div>
          </div>
        </div>
        <div className="dashboard-grid-main p-4">{props.children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
