// react
import React, { FC } from "react";
// components
import CommonTable from "components/tables/CommonTable";
import { CustomDropDown } from "components/dropdown";
import { FilterSquare } from "components/styled-icons";
import { AdminLayout } from "layouts";

interface IProps {}

const customStyles = {
  headCells: {
    style: {
      background: "rgba(245, 245, 250, 0.4)",
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

const columns = [
  {
    name: "Date of service",
    selector: "dateOfService",
    cell: (row) => <small className="text-light-grey font-smaller">{row["dateOfService"]}</small>,
    wrap: false,
  },

  {
    name: "Code",
    selector: "code",
    cell: (row) => <small className="text-light-grey font-smaller">{row["code"]}</small>,
    wrap: false,
  },
  {
    name: "Payer ID",
    selector: "payerId",
    cell: (row) => <small className="text-light-grey font-smaller">{row["payerId"]}</small>,
    wrap: false,
  },
  {
    name: "Payer Name",
    selector: "payerName",
    cell: (row) => <small className="text-light-grey font-smaller">{row["payerName"]}</small>,
    wrap: false,
  },
  {
    name: "Billed",
    selector: "billed",
    cell: (row) => <small className="text-light-grey font-smaller">{row["billed"]}</small>,
    wrap: false,
  },
  {
    name: "Allowed",
    selector: "allowed",
    cell: (row) => <small className="text-light-grey font-smaller">{row["allowed"]}</small>,
    wrap: false,
  },
  {
    name: "Paid",
    selector: "paid",
    cell: (row) => <small className="text-light-grey font-smaller">{row["paid"]}</small>,
    wrap: false,
  },
  {
    name: "Expected",
    selector: "expected",
    cell: (row) => <small className="text-light-grey font-smaller">{row["expected"]}</small>,
    wrap: false,
  },
];

const tableList = [
  {
    dateOfService: "26/05/2021",
    code: "09912",
    payerId: "0111001",
    payerName: "John Wills",
    allowed: "$1210",
    billed: "$1210",
    paid: "$1210",
    expected: "----",
  },
  {
    dateOfService: "26/05/2021",
    code: "09912",
    payerId: "0111001",
    payerName: "John Wills",
    allowed: "$1210",
    billed: "$1210",
    paid: "$1210",
    expected: "----",
  },
  {
    dateOfService: "26/05/2021",
    code: "09912",
    payerId: "0111001",
    payerName: "John Wills",
    allowed: "$1210",
    billed: "$1210",
    paid: "$1210",
    expected: "----",
  },
  {
    dateOfService: "26/05/2021",
    code: "09912",
    payerId: "0111001",
    payerName: "John Wills",
    allowed: "$1210",
    billed: "$1210",
    paid: "$1210",
    expected: "----",
  },
  {
    dateOfService: "26/05/2021",
    code: "09912",
    payerId: "0111001",
    payerName: "John Wills",
    allowed: "$1210",
    billed: "$1210",
    paid: "$1210",
    expected: "----",
  },
  {
    dateOfService: "26/05/2021",
    code: "09912",
    payerId: "0111001",
    payerName: "John Wills",
    allowed: "$1210",
    billed: "$1210",
    paid: "$1210",
    expected: "----",
  },
];

const dropDownStyles = {
  buttonStyles: "border br-10 me-3 bg-white text-base-black",
  textStyles: "text-base-black fw-bold",
};
const dropDownList = [{ name: "CPT&HCPCS code" }, { name: "Insurance" }, { name: "Paid" }];
const UnderPaidItems: FC<IProps> = (props) => {
  return (
    <AdminLayout>
      <div className="px-3 py-2 bg-white">
        <small className="text-base-black fw-bold ">Underpaid Items</small>
      </div>
      <div className="py-3 px-3 bg-light-grey-three d-flex align-items-center">
        {dropDownList.map((ele, index) => {
          return (
            <div className="me-2">
              <CustomDropDown optionsList={[]} placeholder={ele.name} styles={dropDownStyles} />
            </div>
          );
        })}

        <button className="btn btn-primary text-white ms-auto">
          <FilterSquare className="text-white me-3" size="15" />
          Update Fillters
        </button>
      </div>

      <CommonTable
        tableData={tableList}
        columns={columns}
        customStyles={customStyles}
        noHeader={true}
      />
    </AdminLayout>
  );
};
export default UnderPaidItems;
