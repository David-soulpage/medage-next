// react
import React, { FC, useState } from "react";
// react-boostrap
import { Modal } from "react-bootstrap";
// components
import CommonForm from "components/forms/CommonForm";
import CommonModal, { ModalBody, ModalFooter, ModalHeader } from "./CommonModal";

interface IProps {
  onHide: () => any;
}

const data = [
  {
    title: "Expense Head",
    placeholder: "Equipment",
    subType: "input",
    name: "expenseHead",
  },
  {
    title: "Select Category",
    placeholder: "Enter here",
    subType: "input",
    name: "category",
  },
  {
    title: "Description",
    placeholder: "Typre here",
    subType: "textarea",
    name: "description",
    rows: 3,
  },
  {
    title: "Amount",
    placeholder: "$5400",
    subType: "input",
    name: "amount",
  },
  {
    title: "Date",
    placeholder: "Enter here",
    subType: "date",
    name: "date",
  },
  {
    title: "Check No.",
    placeholder: "2122**********",
    subType: "input",
    name: "checkNo",
  },
  {
    title: "Bank Account",
    placeholder: "2122**********",
    subType: "input",
    name: "bankAccount",
  },
];

const initialValues = {
  expenseHead: "",
  category: "",
  description: "",
  amount: "",
  date: "",
  checkNo: "",
  bankAccount: "",
};

const styles = {
  formControl: "font-smaller py-2 br-10",
  formLabel: "text-base-black fw-bold",
  formGroup: "mb-2",
  row: "",
  col: {
    small: "12",
    tablet: "6",
    large: "6",
  },
};
const buttonsList = [
  {
    buttonStyles: "btn btn-primary text-white fw-bold font-smaller px-5 btn-lg mt-5",
    buttonTextStyles: "fw-bold text-white font-smaller",
    title: "Submit",
  },
];

const ExpensesModal: FC<IProps> = ({ onHide }) => {
  const [showModal, setModalStatus] = useState(true);
  const onClose = (value) => {
    setModalStatus(false);
    onHide();
  };

  return (
    <Modal show={showModal} centered={true}>
      <ModalHeader>
        <small className="text-base-black fw-bold">Add Expense</small>
      </ModalHeader>
      <ModalBody>
        <CommonForm list={data} styles={styles} buttonsList={[]} initialValues={initialValues} />
      </ModalBody>
      <ModalFooter footerStyles="bg-light-grey-two">
        <div className="me-auto">
          <button className="btn text-base-black btn-md me-3" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary btn-md me-3 px-5">
            <small className="text-white fw-bold">Add</small>
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
export default ExpensesModal;
