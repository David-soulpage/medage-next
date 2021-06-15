import CommonForm from "components/forms/CommonForm";
import React, { FC } from "react";

interface IProps {}

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

const ExpensesModal: FC<IProps> = (props) => {
  return (
    <div>
      <CommonForm></CommonForm>
    </div>
  );
};
export default ExpensesModal;
