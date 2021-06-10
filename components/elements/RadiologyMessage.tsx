// react
import React, { FC } from "react";
// styled icons
import { Attachment } from "components/styled-icons";
import { ThreeDotsVertical } from "components/styled-icons";
import { Star } from "components/styled-icons";
import { AccountCircle } from "components/styled-icons";

interface ImessageProps {
  message: any;
}

const RadiologyMessage: FC<ImessageProps> = (props) => {
  const { message } = props;
  return (
    <div className="card p-3 w-100 bg-white rounded mt-3">
      <div className="row g-3 d-flex align-items-center">
        <div className="col-md-3 col-sm-6 col-12  d-flex align-items-center">
          <Star size="15" className="text-light-purple me-3" />
          <AccountCircle size="30" className="text-light-purple me-3" />
          <small className="text-base-black fw-bold m-0">{message.name}</small>
        </div>
        <div className="col-md-2 col-sm-6 col-12">
          <small className="text-base-light-black fw-normal">{message.subject}</small>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <small className="text-light-purple fw-normal font-smaller">{message.text}</small>
        </div>
        <div className="col-md-3 col-sm-6 col-12 d-flex justify-content-between">
          <Attachment size="15" className="text-light-purple" />
          <small className="text-light-purple fw-normal font-smaller">{message.date}</small>
          <ThreeDotsVertical className="text-base-black" size="20" />
        </div>
      </div>
    </div>
  );
};

export default RadiologyMessage;
