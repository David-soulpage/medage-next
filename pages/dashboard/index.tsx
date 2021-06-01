// hoc
import withAdminAuth from "lib/hoc/withAdminAuth";

// user
import { getCurrentUser } from "@constants/global";

import { PhoneCall } from "@styled-icons/boxicons-regular/";

const AdminDashboardView = () => {
  const userData = getCurrentUser();
  let time = new Date().toLocaleString();

  return (
    <>
      <>Hello</>
    </>
  );
};

export default AdminDashboardView;
