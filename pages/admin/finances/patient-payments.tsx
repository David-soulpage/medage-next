// react
import React, { FC, useState } from "react";
// components
import { AdminLayout } from "layouts";
import CommonTable from "components/tables/CommonTable";
// styled icons
import { Refresh } from "@styled-icons/heroicons-outline";
import { Search } from "@styled-icons/boxicons-regular";
// boostrap
import { FormControl, InputGroup } from "react-bootstrap";

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
const tableList = [
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
  {
    chartId: "AS000123",
    patientName: "Shane Warne",
    unAllocatedBalance: "$11134",
    totalPayment: "$11134",
    unAllocatedPayment: "$11134",
  },
];

const columns = [
  {
    name: "Chart ID",
    selector: "chartId",
    cell: (row) => <small className="text-light-grey font-smaller">{row["chartId"]}</small>,
    wrap: false,
  },

  {
    name: "Patient Name",
    selector: "patientName",
    cell: (row) => <small className="text-light-grey font-smaller">{row["patientName"]}</small>,
    wrap: false,
  },
  {
    name: "Unallocated Balance",
    selector: "unAllocatedBalance",
    cell: (row) => (
      <small className="text-light-grey font-smaller">{row["unAllocatedBalance"]}</small>
    ),
    wrap: false,
  },
  {
    name: "Total Payment",
    selector: "totalPayment",
    cell: (row) => <small className="text-light-grey font-smaller">{row["totalPayment"]}</small>,
    wrap: false,
  },
  {
    name: "Unallocated Payment",
    selector: "unAllocatedPayment",
    cell: (row) => (
      <small className="text-light-grey font-smaller">{row["unAllocatedPayment"]}</small>
    ),
    wrap: false,
  },

  {
    name: "",
    selector: "",
    cell: (row) => (
      <button className="btn btn-outline-primary">
        <Refresh className="text-primary" size="15" />
        Auto fill
      </button>
    ),
    wrap: false,
  },
];

const Payments: FC<IProps> = (props) => {
  const [searchText, setSearchText] = useState("");

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <AdminLayout>
      <div className="bg-white">
        <div className="py-2 px-3">
          <h6 className="text-base-black fw-bold">Patient Payments</h6>
        </div>
        <div className="bg-light-grey-two w-100" style={{ height: 1 }}></div>
        <InputGroup className="py-1 mx-3 br-10 border bg-white w-25 d-flex align-items-center mt-3">
          <FormControl
            name="password"
            type={"text"}
            placeholder="Willaimson"
            size="sm"
            className="border-0"
            value={searchText}
            onChange={onChangeSearchText}
          />
          <InputGroup.Append className="border-0">
            <Search className="text-base-black" size="20" />
          </InputGroup.Append>
        </InputGroup>
        <div className="py-2 px-3">
          <h6 className="text-base-blacks fw-normal">Patient with unallocated Balance</h6>
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
export default Payments;
