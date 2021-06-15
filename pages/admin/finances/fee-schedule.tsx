// react
import React, { FC, useState } from "react";
// boostrap
import { Form } from "react-bootstrap";
// layout
import { AdminLayout } from "layouts";
import { CustomDropDown } from "components/dropdown";
import CommonTable from "components/tables/CommonTable";
// styled -icons
import { Delete, Pencil, PlusCircle, FileExport } from "components/styled-icons";

interface IProps {}

const list = [
  {
    name: "CPT & HCPCS",
  },
  {
    name: "ICD-9",
  },
  {
    name: "ICD-10",
  },
  { name: "Custom" },
];

const FinanceFeeSchedule: FC<IProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  const onPressItem = (index) => {
    setSelectedIndex(index);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const dropDownStyles = {
    buttonStyles: "border br-10 me-3 bg-white text-base-black",
    textStyles: "text-base-black fw-bold",
  };

  const dropDownList = [
    { name: "Payer ID" },
    {
      name: "Plan Name",
    },
    {
      name: "Pick List Category",
    },
  ];

  const columns = [
    {
      name: "Procedure",
      selector: "date",
      cell: (row) => <small className="text-light-grey font-smaller">{row["procedure"]}</small>,
      wrap: false,
    },

    {
      name: "Type",
      selector: "type",
      cell: (row) => <small className="text-light-grey font-smaller">{row["type"]}</small>,
      wrap: false,
    },
    {
      name: "Insurance Payer",
      selector: "insurancePayer",
      cell: (row) => (
        <small className="text-light-grey font-smaller">{row["insurancePayer"]}</small>
      ),
      wrap: false,
    },
    {
      name: "Price",
      selector: "price",
      cell: (row) => <small className="text-light-grey font-smaller">{row["price"]}</small>,
      wrap: false,
    },
    {
      name: "Allowed",
      selector: "Allowed",
      cell: (row) => <small className="text-light-grey font-smaller">{row["Allowed"]}</small>,
      wrap: false,
    },
    {
      name: "Billed",
      selector: "billed",
      cell: (row) => <small className="text-light-grey font-smaller">{row["billed"]}</small>,
      wrap: false,
    },
    {
      name: "Modifiers",
      selector: "modifiers",
      cell: (row) => <small className="text-light-grey font-smaller">{row["modifiers"]}</small>,
      wrap: false,
    },
    {
      name: "NDC Code",
      selector: "ndcCode",
      cell: (row) => <small className="text-light-grey font-smaller">{row["ndcCode"]}</small>,
      wrap: false,
    },
    {
      name: "Pick list category",
      selector: "pickListCategory",
      cell: (row) => (
        <small className="text-light-grey font-smaller">{row["pickListCategory"]}</small>
      ),
      wrap: false,
    },
    {
      name: "Actions",
      selector: "actions",
      cell: (row) => (
        <div>
          <Pencil className="text-light-grey me-3" size="20" />
          <Delete className="text-red" size="20" />
        </div>
      ),
      wrap: false,
    },
  ];

  const tableList = [
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
    {
      procedure: "99213: OFFIC/OUTPUTPATIENTVISIT TEST",
      type: "CPT",
      insurancePayer: "Default Pay for all Payers",
      price: "$1.122.00",
      allowed: "$0.00",
      modifiers: "----",
      ndcCode: "----",
      pickListCategory: "----",
      actions: "",
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        background: "#ededf2",
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

  return (
    <AdminLayout>
      <div className="bg-white">
        <div className="py-3 px-3">
          <small className="text-base-black fw-bold"> Insurance Payer Fee Schedule</small>
        </div>
        <div className="d-flex align-items-center px-3">
          {list.map((ele, index) => {
            return (
              <div className="me-5 btn p-0" key={index} onClick={() => onPressItem(index)}>
                <small
                  className={`${index === selectedIndex ? "text-primary" : "text-base-black"}`}
                >
                  {ele.name}
                </small>
                <div
                  className={`rounded mt-2 ${index === selectedIndex ? "bg-primary" : "bg-white"}`}
                  style={{ height: 2 }}
                ></div>
              </div>
            );
          })}
          <div className={`rounded bg-light-grey-two`} style={{ height: 2 }} />
        </div>
        <div className="mt-3 bg-light-grey-two p-3 d-flex align-items-center">
          <Form.Control
            type={"text"}
            placeholder={"CPT & HCPCS Custoem Procedure"}
            onChange={handleChange}
            value={searchText}
            className={`border br-10 w-25 me-2`}
          />
          {dropDownList.map((ele, index) => {
            return (
              <div className="me-2">
                <CustomDropDown optionsList={[]} placeholder={ele.name} styles={dropDownStyles} />
              </div>
            );
          })}
          <button className="btn btn-primary text-white btn-md ms-auto">Update</button>
        </div>
        <div className="bg-white">
          <div className="d-flex flex-row-reverse align-items-center py-3">
            <button className="btn text-primary">
              <FileExport size="15" className="text-primary me-2" /> Export to file
            </button>
            <button className="btn  text-primary me-3">
              <PlusCircle size="15" className="text-primary me-2" /> Add new
            </button>
          </div>
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
export default FinanceFeeSchedule;
