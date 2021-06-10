// hoc
import withAdminAuth from "lib/hoc/withAdminAuth";

// user
import { getCurrentUser } from "constants/global";

import { PhoneCall } from "components/styled-icons/";

const AdminDashboardView = () => {
  const userData = getCurrentUser();
  let time = new Date().toLocaleString();

  return (
    <>
      <>Dashboard</>
    </>
  );
};

export default AdminDashboardView;
