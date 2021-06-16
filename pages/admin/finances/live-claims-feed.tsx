// react
import React, { FC } from "react";
// components
import { LiveClaimsFeed as LiveClaimsFeedElement } from "components/elements";

import { AdminLayout } from "layouts";

interface IProps {}

const LiveClaimsFeed: FC<IProps> = (props) => {
  return (
    <AdminLayout>
      <LiveClaimsFeedElement />
    </AdminLayout>
  );
};
export default LiveClaimsFeed;
