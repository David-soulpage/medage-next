// react
import React, { FC } from "react";
// styled-icons
import { DotsVerticalRounded } from "components/styled-icons";
import { AccountCircle } from "components/styled-icons";
import { Exclamation } from "styled-icons/bootstrap";
import { Forward } from "components/styled-icons";

interface IMessagesCard {
  data: {
    name: string;
    description: string;
    date: string;
  };
}
const MessagesCard: FC<IMessagesCard> = ({ data }) => {
  return (
    <div className="mt-4">
      <div className="card bg-light p-3 border-0">
        <div className="d-flex align-items-start">
          <AccountCircle size="30" />
          <div className="ms-3">
            <div className="d-flex align-items-center ">
              <small className="m-0 d-block text-base-black fw-bold me-3">{data.name}</small>
              <Exclamation size="20" />
            </div>
            <small className="text-light-purple">{data.description}</small>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <small className=" fw-light me-3  text-light-purple font-smaller">{data.date}</small>

            <DotsVerticalRounded size="20" />
          </div>
        </div>
        <div className="d-flex flex-row-reverse">
          <button className="btn-sm border-0 bg-light-primary ">
            <Forward size="20" className=" text-primary" />
            <small className="ms-3 text-primary">Reply</small>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MessagesCard;
