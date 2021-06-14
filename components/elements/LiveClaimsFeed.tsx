// react
import React, { FC } from "react";
// components
import { CustomDropDown } from "components/dropdown";

interface IProps {}

const list = [
  {
    title: "Select Offices",
    name: "selectOffices",
    placeholder: "Select...",
    subType: "dropDown",
    textType: "text",
    optionsList: [
      {
        title: "Myself",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },

  {
    title: "Claim St",
    name: "claimSt",
    subType: "dropDown",
    placeholder: "Select...",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
  {
    name: "billingSt",
    subType: "dropDown",
    placeholder: "Select...",
    title: "Billing St",
    type: "dropDown",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
  {
    title: "Appoinment Profils",
    name: "appointmentProfil",
    type: "dropDown",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
  {
    name: "Caluculate Counts",
    type: "button",
  },
  {
    name: "Patient ID",
    type: "input",
  },
  {
    name: "Patient Name",
    type: "input",
  },
  {
    name: "DRC claim#",
    type: "input",
  },
  {
    name: "Date",
    type: "date",
  },
  {
    name: "Clinical Note",
    type: "dropDown",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
];

const LiveClaimsFeed: FC<IProps> = (props) => {
  return (
    <div className="p-4 d-flex flex-column">
      <small className="text-base-black fw-bold mb-3">Live Claims Feed</small>
      <div className="bg-light-grey-two" style={{ height: 1 }}></div>
      <div className="row mt-3">
        <div className="col-12 col-md-3">
          <div className="mb-1">
            <small className="text-base-black fw-normal  fw-bold">Select Offices</small>
          </div>

          <CustomDropDown
            optionsList={[
              {
                title: "All",
                textStyles: "text-dark-grey fw-normal",
              },
            ]}
            placeholder="Select offices"
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};
export default LiveClaimsFeed;
