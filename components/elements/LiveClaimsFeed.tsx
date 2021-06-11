// react
import React, { FC } from "react";
// components
import { CustomDropDown } from "components/dropdown";

interface IProps {}

const list = [
  {
    name: "Claim St",
  },
];

const LiveClaimsFeed: FC<IProps> = (props) => {
  return (
    <div className="p-4 d-flex flex-column">
      <small className="text-base-black fw-bold mb-3">Live Claims Feed</small>
      <div className="bg-light-grey-two" style={{ height: 1 }}></div>
      <div className="row mt-3">
        <div className="col-12 col-md-3">
          <small className="text-base-black fw-normal my-3">Select Offices</small>
          <CustomDropDown optionsList={[]} placeholder="Select offices" />
        </div>
      </div>
    </div>
  );
};
export default LiveClaimsFeed;
