// react
import React, { FC, useState } from "react";
// styled icons
import { CheckCircleFill } from "@styled-icons/bootstrap/";
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";
import { ProblemListStepOne } from "@components/elements";
import CommonForm from "@components/forms/CommonForm";

interface IProps {}

const ProblemStepper: FC<IProps> = (props) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const data = [
    {
      name: "Select problem",
    },
    {
      name: "New Problem",
    },
    {
      name: "Problem Summary",
    },
    {
      name: "Confirmation",
    },
    {
      name: "Payments",
    },
    {
      name: "Medications",
    },
  ];

  const initialValues = {
    patientRelation: "",
    phoneNumber: "",
    address: "",
    appointmentTime: "",
    reasonForTheVisit: "",
    haveYouSeenTheDoctorBefore: "",
    doctorNotes: "",
    insurance: "",
    insuranceTwo: "",
    insuranceMemberId: "",
  };

  const styles = {
    formControl: "font-smaller py-2 br-10",
    formLabel: "text-base-black fw-bold",
    formGroup: "mb-2",
    row: "",
    col: {
      small: "12",
      tablet: "6",
      large: "4",
    },
  };
  const buttonsList = [
    {
      buttonStyles: "btn btn-primary text-white fw-bold font-smaller px-5 btn-lg mt-5",
      buttonTextStyles: "fw-bold text-white font-smaller",
      title: "Submit",
    },
  ];
  const list = [
    {
      title: "Who will be seeing the doctor?",
      placeholder: "Select",
      subType: "dropDown",
      textType: "text",
      name: "patientRelation",
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
      title: "Phone Number",
      placeholder: "9989984350",
      subType: "",
      textType: "number",
      name: "phoneNumber",
    },
    {
      title: "Address",
      placeholder: "San Joss, California, USA",
      subType: "",
      textType: "text",
      name: "address",
    },
    {
      title: "Appointment time",
      placeholder: "03:00-04:00PM",
      subType: "",
      textType: "text",
      name: "appointmentTime",
    },
    {
      name: "reasonForTheVisit",
      title: "Reason for the visit",
      placeholder: "Select",
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
      title: "Have you seen doctor before?",
      name: "haveYouSeenTheDoctorBefore",
      placeholder: "Select",
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
      title: "Doctor Notes",
      name: "doctorNotes",
      placeholder: "Write here",
      subType: "textarea",
      rows: 3,
      textType: "text",
    },
    {
      title: "Insurance",
      name: "insurance",
      placeholder: "Select",
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
      title: "Insurance 2",
      name: "insuranceTwo",
      placeholder: "Select",
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
      title: "Insurance Member ID",
      name: "insuranceMemberId",
      placeholder: "Select",
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
  ];

  const initialValues1 = {
    reasonForVisit: "",
    whenDidYouNotice: "",
    howOftenYouFeel: "",
    howItChangedFromFirstTime: "",
  };

  const list1 = [
    {
      title: "What is the primary reason for your visit?",
      name: "reasonForVisit",
      placeholder: "Back pain...",
    },
    {
      title: "When did you first notice your back pain?",
      name: "whenDidYouNotice",
      placeholder: "Back pain...",
    },
    {
      title: "How often do you feel back pain?",
      name: "owOftenYouFee",
      placeholder: "Constantly",
    },
    {
      title: "Since you first noticed your back pain, how has it changed?",
      name: "howItChangedFromFirstTime",
      placeholder: "Gradually worsening",
    },
  ];
  const styles1 = {
    formControl: "font-smaller py-2 border-0 px-0",
    formLabel: "text-base-black fw-bold",
    formGroup: "mb-2 ",
    row: "",
    col: {
      small: "12",
      tablet: "12",
      large: "12",
    },
  };

  const initialValues2 = {
    whenDidYouNotice: "",
    howOftenYouFeel: "",
  };

  const styles2 = {
    formControl: "font-smaller py-2 border-0 px-0",
    formLabel: "text-base-black fw-bold mb-2",
    formGroup: "mb-2 mt-3",
    row: "",
    col: {
      small: "12",
      tablet: "12",
      large: "12",
    },
  };
  const list2 = [
    {
      title: "When did you first notice your problem ?",
      optionsList: [
        "Today",
        "Yesterday",
        "In the past 7 days",
        "In the past 7 days",
        "More than 1 year ago",
        "More than 1 month ago",
      ],
      subType: "radio",
      name: "whenDidYouNotice",
    },
    {
      title: "When did you first notice your problem ?",
      optionsList: [
        "Today",
        "Yesterday",
        "In the past 7 days",
        "In the past 7 days",
        "More than 1 year ago",
        "More than 1 month ago",
      ],
      subType: "radio",
      name: "howOftenYouFeel",
    },
  ];

  const buttonsList1 = [
    {
      buttonStyles: "btn btn-primary text-white fw-bold font-smaller px-5 btn-lg mt-5",
      buttonTextStyles: "fw-bold text-white font-smaller",
      title: "Next",
    },
  ];

  const onPressForm = () => {
    setSelectedItemIndex(selectedItemIndex + 1);
  };

  const RenderBasedOnStepIndex = () => {
    switch (selectedItemIndex) {
      case 0:
        return <ProblemListStepOne onPressForm={onPressForm} />;
      case 1:
      case 2:
      case 3:
        return (
          <CommonForm
            initialValues={
              selectedItemIndex === 1
                ? initialValues2
                : selectedItemIndex === 2
                ? initialValues1
                : initialValues
            }
            styles={selectedItemIndex === 1 ? styles2 : selectedItemIndex === 2 ? styles1 : styles}
            buttonsList={selectedItemIndex === 1 ? buttonsList1 : buttonsList}
            list={selectedItemIndex === 1 ? list2 : selectedItemIndex === 2 ? list1 : list}
            underline={selectedItemIndex === 1 || selectedItemIndex === 2 ? "true" : ""}
            onPressForm={onPressForm}
          />
        );
      case 4:
        return <p>step 4</p>;
      case 5:
        return <p>step 5</p>;
    }
  };

  return (
    <PatientDashboardLayout>
      <div className="mx-4">
        <small className="text-base-balck fw-bold mt-2">Active Problem</small>
        <div className="card border-0 shadow-sm p-4 mt-3">
          <div className="row mt-4 mb-2">
            {data.map((ele, index) => {
              return (
                <div
                  className="col-md-2 d-flex align-items-center justify-content-end px-0 py-0 position-relative"
                  key={index}
                  onClick={() => setSelectedItemIndex(index)}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="bg-white">
                      <CheckCircleFill
                        size="20"
                        className={
                          index <= selectedItemIndex ? "text-primary" : "text-light-grey-two"
                        }
                      />
                    </div>
                    <div>
                      {" "}
                      <small
                        className={`${
                          index <= selectedItemIndex ? "text-primary" : "text-base-black"
                        } font-smaller fw-bold`}
                      >
                        {ele.name}
                      </small>
                    </div>
                  </div>
                  <div
                    className={`position-absolute top-30 w-100 ${
                      index <= selectedItemIndex ? "bg-primary" : "bg-light-grey-two"
                    }`}
                    style={{ height: 2 }}
                  ></div>
                </div>
              );
            })}
          </div>
          <RenderBasedOnStepIndex />
        </div>
      </div>
    </PatientDashboardLayout>
  );
};
export default ProblemStepper;
