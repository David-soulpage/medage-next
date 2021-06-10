// react
import React, { FC, ReactNode } from "react";
// components
import RadiologyHeader from "components/elements/RadiologyHeader";

interface IRadiologyLayout {
  children: ReactNode;
}
const RadiologyLayout: FC<IRadiologyLayout> = ({ children }) => {
  return (
    <div className="bg-light ">
      <RadiologyHeader />
      <div className="container-fluid mt-3 py-3 px-5">{children}</div>
    </div>
  );
};

export default RadiologyLayout;
