// react
import React, { FC } from "react";
// local components
import { CommonCard } from "components/card";
//styled icons
import { User } from "@styled-icons/fa-regular";
import { Clock } from "@styled-icons/bootstrap";
import { MessageCircleOutline } from "@styled-icons/evaicons-outline";
import { LineGraph } from "@styled-icons/entypo";

interface IProps {
  list: Array<any>;
}

const CardSection: FC<IProps> = ({ list }) => {
  return (
    <div className="row">
      {list.map((card, id) => (
        <div key={id} className="col-md-3">
          <CommonCard>
            <div className="d-flex align-items-center">
              <div>
                <small className="m-0 text-base-light-black mb-2">{card.title}</small>
                <h3 className="text-base-black m-0">{card.number}</h3>
              </div>
              <div className="ms-auto">
                <div className={`border-0 p-3 rounded ${card.background}`}>
                  {card.icon === "user" ? (
                    <User className="text-primary" size="20" />
                  ) : card.icon === "clock" ? (
                    <Clock className=" text-warning" size="20" />
                  ) : card.icon === "message" ? (
                    <MessageCircleOutline className=" text-success" size="20" />
                  ) : card.icon === "graph" ? (
                    <LineGraph className=" text-info" size="20" />
                  ) : null}
                </div>
              </div>
            </div>
          </CommonCard>
        </div>
      ))}
    </div>
  );
};
export default CardSection;
