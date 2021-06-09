//React
import React, { FC, useEffect, useState } from "react";
// components
import CommonForm from "@components/forms/CommonForm";
import { ProblemListStepOne } from "@components/elements";

interface IProps {
  onPressNext: () => void;
}

const ActiveProblemCard: FC<IProps> = (props) => {
  const [step, setStep] = useState(0);

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

  useEffect(() => {
    if (step === 3) props.onPressNext();
  }, [step]);

  const onPressForm = () => {
    setStep(step + 1);
  };
  return (
    <div className="d-flex mt-2 flex-column bg-white">
      {step === 0 ? (
        <ProblemListStepOne onPressForm={onPressForm} />
      ) : (
        <CommonForm
          initialValues={step === 1 ? initialValues2 : step === 2 ? initialValues1 : initialValues}
          styles={step === 1 ? styles2 : step === 2 ? styles1 : styles}
          buttonsList={step === 1 ? buttonsList1 : buttonsList}
          list={step === 1 ? list2 : step === 2 ? list1 : list}
          underline={step === 1 || step === 2 ? "true" : ""}
          onPressForm={onPressForm}
        />
      )}
    </div>
  );
};
export default ActiveProblemCard;
