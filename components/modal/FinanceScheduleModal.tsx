import CommonForm from "components/forms/CommonForm";
import React, { FC } from "react";
import { CommonModal } from ".";
import { ModalBody, ModalFooter, ModalHeader } from "./CommonModal";
import { ThreeDotsVertical } from "components/styled-icons";

interface IProps {
  show: boolean;
  onHide: () => void;
  centered: boolean;
}

const list = [
  {
    title: "Patient",
    placeholder: "Enter Here",
    name: "patientName",
    subType: "input",
  },
  {
    title: "Office",
    placeholder: "Select...",
    name: "office",
    subType: "dropDown",
    optionsList: [],
  },
  {
    title: "Exam Room",
    placeholder: "Select...",
    name: "examRoom",
    subType: "dropDown",
    optionsList: [],
  },
  {
    title: "Scheduled Time",
    placeholder: "Select...",
    name: "date",
    subType: "date",
  },
];
const initialValues = {
  patientName: "",
  office: "",
  examRoom: "",
  scheduleTime: "",
};
const styles = {
  formControl: "font-smaller py-2 br-10",
  formLabel: "text-base-black fw-bold",
  formGroup: "mb-3",
  row: "",
  col: {
    small: "12",
    tablet: "12",
    large: "12",
  },
  buttonsWrapper: "bg-secondary py-2",
};

const buttonsList = [
  {
    buttonStyles: "btn btn-lg",
    buttonTextStyles: "fw-bold text-base-black font-smaller",
    title: "Cancel",
  },
  {
    buttonStyles: "btn btn-primary text-white fw-bold btn-lg py-2 px-3",
    buttonTextStyles: "fw-bold text-white font-smaller ",
    title: "Submit",
  },
];

const FinanceScheduleModal: FC<IProps> = ({ show, onHide, centered }) => {
  return (
    <CommonModal show={show} onHide={onHide} centered={centered}>
      <ModalHeader>
        <h6 className="text-base-black fw-bold">Schedule Service</h6>
        <ThreeDotsVertical className="ms-auto text-base-black" size="20" />
      </ModalHeader>
      <ModalBody>
        <CommonForm
          list={list}
          styles={styles}
          buttonsList={buttonsList}
          underline=""
          initialValues={initialValues}
        />
      </ModalBody>
      {/* <ModalFooter className="bg-light-grey py-5"></ModalFooter> */}
    </CommonModal>
  );
};
export default FinanceScheduleModal;
