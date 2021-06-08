//React
import React, { FC } from "react";
// components
import CommonForm from "@components/forms/CommonForm";

interface IProps {}

const ActiveProblemCard: FC<IProps> = (props) => {
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
    formGroup: "mb-2",
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
    formLabel: "text-base-black fw-bold",
    formGroup: "mb-2",
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
  return (
    <div className="card border-0 shadow-sm p-4 mx-4 d-flex flex-column bg-white">
      <CommonForm
        initialValues={initialValues2}
        styles={styles2}
        buttonsList={buttonsList}
        list={list2}
        underline="true"
      />
    </div>
  );
};
export default ActiveProblemCard;
