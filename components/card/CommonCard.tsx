import React, { FC } from "react";

interface ICommonCard {
  additionalStyles?: string;
  children: React.ReactNode;
}

const CommonCard: FC<ICommonCard> = ({ children, additionalStyles }) => {
  return <div className={`card border-0 shadow-sm p-4 h-100 ${additionalStyles}`}>{children}</div>;
};
export default CommonCard;
