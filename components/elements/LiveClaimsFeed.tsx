// react
import React, { FC } from "react";
// components
import { CustomDropDown } from "components/dropdown";

interface IProps {}

const LiveClaimsFeed: FC<IProps> = (props) => {
  return (
    <div className="p-4 d-flex flex-column">
      <small className="text-base-black fw-bold mb-3">LiveClaimsFeed</small>
      <div className="bg-light-grey" style={{ height: 2 }}></div>
      <div className="row">
        <div className="col-12 col-md-4">
          <small className="text-base-black fw-normal">Select Offices</small>
          <CustomDropDown optionsList={[]} placeholder="Select offices" />
        </div>
      </div>
    </div>
  );
};
export default LiveClaimsFeed;
