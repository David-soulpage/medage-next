// react
import React, { FC, useState } from "react";
// components
import { LiveClaimsFeed } from "components/elements";

import { AdminLayout } from "layouts";

interface IProps {}

const AdminFinances: FC<IProps> = (props) => {
  return (
    <AdminLayout>
      <LiveClaimsFeed />
    </AdminLayout>
  );
};
export default AdminFinances;
