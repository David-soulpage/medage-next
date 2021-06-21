// react
import React, { FC, useState } from "react";
// components
import { CustomDropDown } from "components/dropdown";
import CommonForm from "components/forms/CommonForm";
import CommonTable from "components/tables/CommonTable";
//styled-icons
import { Square, Download } from "components/styled-icons";
import { FinanceScheduleModal } from "components/modal";

interface IProps {}

const list = [
  {
    title: "Claim St",
    name: "claimSt",
    subType: "dropDown",
    placeholder: "Select...",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
  {
    name: "billingSt",
    subType: "dropDown",
    placeholder: "Select...",
    title: "Billing St",
    type: "dropDown",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
  {
    title: "Appoinment Profils",
    placeholder: "Select...",
    name: "appointmentProfil",
    type: "dropDown",
    subType: "dropDown",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
  {
    title: "Caluculate Counts",
    subType: "button",

    buttonStyles: "btn btn-primary text-white fw-bold font-smaller btn-md br-10 w-75",
    buttonTextStyles: "fw-bold text-white font-smaller",
  },
  {
    title: "Patient ID",
    subType: "input",
    placeholder: "Enter Here",
    name: "patientId",
  },
  {
    title: "Patient Name",
    subType: "input",
    placeholder: "Enter Here",
    name: "patientName",
  },
  {
    title: "DRC claim#",
    subType: "input",
    placeholder: "Enter Here",
    name: "drcClaim",
  },
  {
    title: "Date",
    subType: "date",
    name: "date",
    styles: " text-base-black fw-normal font-smaller br-10 ",
  },
  {
    title: "Clinical Note",
    name: "clinicalNote",
    type: "dropDown",
    optionsList: [
      {
        title: "All",
        textStyles: "text-dark-grey fw-normal",
      },
      {
        title: "Mother",
        textStyles: "text-dark-grey fw-normal",
      },
    ],
  },
];

const initialValues = {
  claimSt: "",
  billingSt: "",
  appointmentProfil: "",
};

const styles = {
  formControl: "font-smaller py-2 br-10",
  formLabel: "text-base-black fw-bold",
  formGroup: "mb-3",
  row: "",
  col: {
    small: "12",
    tablet: "6",
    large: "3",
  },
};

interface IProps {}

const tableList = [
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
  {
    info: "---",
    claimId: "1234",
    dateOfService: "26/05/2021",
    office: "Totals:",
    billed: "$0.00",
    adjmt: "$0.00",
    insOnePaid: "$0.00",
    insTwoPaid: "$0.00",
    ptPaid: "$0.00",
    ptLineItemBal: "$0.00",
  },
];

const columns = [
  {
    name: <Square size="20" className="text-light-grey" />,
    selector: "date",
    cell: (row) => <Square size="20" className="text-light-grey" />,
    wrap: false,
  },

  {
    name: "Info",
    selector: "info",
    cell: (row) => <small className="text-light-grey font-smaller">{row["info"]}</small>,
    wrap: false,
  },
  {
    name: "Claim ID",
    selector: "claimId",
    cell: (row) => <small className="text-light-grey font-smaller">{row["claimId"]}</small>,
    wrap: false,
  },
  {
    name: "Date of Service",
    selector: "dateOfService",
    cell: (row) => <small className="text-light-grey font-smaller">{row["dateOfService"]}</small>,
    wrap: false,
  },
  {
    name: "Office",
    selector: "office",
    cell: (row) => <small className="text-light-grey font-smaller">{row["office"]}</small>,
    wrap: false,
  },
  {
    name: "Billed",
    selector: "billed",
    cell: (row) => <small className="text-light-grey font-smaller">{row["billed"]}</small>,
    wrap: false,
  },
  {
    name: "Adjmt",
    selector: "adjmt",
    cell: (row) => <small className="text-light-grey font-smaller">{row["adjmt"]}</small>,
    wrap: false,
  },
  {
    name: "Ins 1 Paid",
    selector: "insOnePaid",
    cell: (row) => <small className="text-light-grey font-smaller">{row["insOnePaid"]}</small>,
    wrap: false,
  },
  {
    name: "Ins 2 Paid",
    selector: "insTwoPaid",
    cell: (row) => <small className="text-light-grey font-smaller">{row["insTwoPaid"]}</small>,
    wrap: false,
  },
  {
    name: "Pt Paid",
    selector: "ptPaid",
    cell: (row) => <small className="text-light-grey font-smaller">{row["ptPaid"]}</small>,
    wrap: false,
  },
  {
    name: "Pt Line item Bal",
    selector: "ptLineItemBal",
    cell: (row) => <small className="text-light-grey font-smaller">{row["ptLineItemBal"]}</small>,
    wrap: false,
  },
];

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

const dropDownStyles = {
  buttonStyles: "border-0 me-3 bg-transparent text-base-black",
  textStyles: "text-base-black fw-bold",
};

const LiveClaimsFeed: FC<IProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-4 d-flex flex-column bg-white">
      <small className="text-base-black fw-bold mb-3">Live Claims Feed</small>
      <div className="bg-light-grey-two" style={{ height: 1 }}></div>
      <div className="row my-3">
        <div className="col-12 col-md-3">
          <div className="mb-1">
            <small className="text-base-black fw-normal  fw-bold">Select Offices</small>
          </div>

          <CustomDropDown
            optionsList={[
              {
                title: "All",
                textStyles: "text-dark-grey fw-normal",
              },
            ]}
            placeholder="Select offices"
          />
        </div>
      </div>
      <CommonForm
        list={list}
        styles={styles}
        buttonsList={[]}
        underline=""
        initialValues={initialValues}
      />
      <div className="d-flex  align-items-center  px-2 py-2 bg-light-grey-two">
        <div className="d-flex align-items-center">
          <CustomDropDown
            optionsList={[]}
            placeholder="Batch Status Change"
            styles={dropDownStyles}
          />
          <CustomDropDown optionsList={[]} placeholder="Export to File" styles={dropDownStyles} />
          <div className="me-3">
            <small className="text-base-black fw-bold">Custom Export</small>
          </div>
          <Download size="25" className="text-base-black" />
        </div>
        <div className="d-flex ms-auto align-items-center">
          <CustomDropDown optionsList={[]} placeholder="Display" styles={dropDownStyles} />
          <button
            className="btn btn-md btn-outline-primary br-10"
            onClick={() => setShowModal(true)}
          >
            Schedule +
          </button>
        </div>
      </div>
      <CommonTable
        tableData={tableList}
        columns={columns}
        customStyles={customStyles}
        noHeader={true}
      />
      <FinanceScheduleModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        centered={true}
      />
    </div>
  );
};
export default LiveClaimsFeed;
