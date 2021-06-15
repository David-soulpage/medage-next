import { PlusCircle } from "components/styled-icons";
import CommonTable from "components/tables/CommonTable";
import { AdminLayout } from "layouts";
import React, { FC, useState } from "react";
import { Form } from "react-bootstrap";

interface IProps {}

const customStyles = {
  headCells: {
    style: {
      background: "white",
      color: "#1E2233",
      fontSize: "14px",
      border: "none",
      fontWeight: "bold",
    },
  },
  cells: {
    style: {},
  },

  rows: {
    style: {
      borderRadius: "10px",
      border: "1px solid #ECECF2",
      marginTop: "5px",
      height: "60px",
      fontSize: "16px",
    },
  },
};

const tableList = [
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
  {
    expenseHead: "John Deo",
    category: "Utilities Bill",
    amount: "$5400",
    date: "26/05/2021",
    bank: "1342*****",
    checkNo: "02",
    actions: "View Details",
  },
];

const columns = [
  {
    name: "Expense Head",
    selector: "expenseHead",
    cell: (row) => <small className="text-light-grey font-smaller">{row["expenseHead"]}</small>,
    wrap: false,
  },

  {
    name: "Category",
    selector: "category",
    cell: (row) => <small className="text-light-grey font-smaller">{row["category"]}</small>,
    wrap: false,
  },
  {
    name: "Amount",
    selector: "amount",
    cell: (row) => <small className="text-light-grey font-smaller">{row["amount"]}</small>,
    wrap: false,
  },
  {
    name: "Date",
    selector: "date",
    cell: (row) => <small className="text-light-grey font-smaller">{row["date"]}</small>,
    wrap: false,
  },
  {
    name: "Bank",
    selector: "bank",
    cell: (row) => <small className="text-light-grey font-smaller">{row["bank"]}</small>,
    wrap: false,
  },
  {
    name: "Check No.",
    selector: "checkNo",
    cell: (row) => <small className="text-light-grey font-smaller">{row["checkNo"]}</small>,
    wrap: false,
  },
  {
    name: "Actions",
    selector: "actions",
    cell: (row) => (
      <button className="text-primary font-smaller btn">
        <small>{row["actions"]}</small>
      </button>
    ),
    wrap: false,
  },
];

const AdminFinancesExpenditure: FC<IProps> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModalStatus] = useState(false);

  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const addExpense = () => {
    setShowModalStatus(true);
  };

  return (
    <AdminLayout>
      <div className="bg-white">
        <div className="px-2 py-3">
          <small className="text-base-black fw-bold ">Expense List</small>
        </div>

        <div className="bg-secondary px-2 py-2 d-flex align-items-center">
          <Form.Control
            type={"text"}
            placeholder={"Search Category"}
            onChange={handleChange}
            value={searchText}
            className={`border br-10 w-25`}
          />
          <button className="btn btn-primary text-white btn-sm ms-auto" onClick={addExpense}>
            {" "}
            <PlusCircle size="15" className="text-white " />
            <small className="text-white ms-2">Add Expense</small>
          </button>
        </div>
        <div className="px-3">
          <CommonTable
            tableData={tableList}
            columns={columns}
            customStyles={customStyles}
            noHeader={true}
          />
        </div>
      </div>
    </AdminLayout>
  );
};
export default AdminFinancesExpenditure;
