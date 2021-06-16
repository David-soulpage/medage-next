// react
import React, { FC, useState } from "react";
// components
import { AdminLayout } from "layouts";
import { CustomDropDown } from "components/dropdown";
import CommonTable from "components/tables/CommonTable";
import { FileExport, FilterSquare, Printer } from "components/styled-icons";

interface IProps {}

const Transactions: FC<IProps> = (props) => {
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
    { name: "Doctor/ Patient" },
    {
      name: "Office",
    },
    {
      name: "All exam rooms",
    },
  ];

  const columns = [
    {
      name: "Appoinment",
      selector: "date",
      cell: (row) => <small className="text-light-grey font-smaller">{row["appoinment"]}</small>,
      wrap: false,
    },

    {
      name: "Patient Name",
      selector: "patientName",
      cell: (row) => <small className="text-light-grey font-smaller">{row["patientName"]}</small>,
      wrap: false,
    },
    {
      name: "Provider",
      selector: "provider",
      cell: (row) => <small className="text-light-grey font-smaller">{row["provider"]}</small>,
      wrap: false,
    },
    {
      name: "Billed",
      selector: "billed",
      cell: (row) => <small className="text-light-grey font-smaller">{row["billed"]}</small>,
      wrap: false,
    },
    {
      name: "Adjustment",
      selector: "adjustment",
      cell: (row) => <small className="text-light-grey font-smaller">{row["adjustment"]}</small>,
      wrap: false,
    },
    {
      name: "Pt.Paid",
      selector: "ptPaid",
      cell: (row) => <small className="text-light-grey font-smaller">{row["ptPaid"]}</small>,
      wrap: false,
    },
    {
      name: "Posted Date",
      selector: "postedDate",
      cell: (row) => <small className="text-light-grey font-smaller">{row["postedDate"]}</small>,
      wrap: false,
    },
    {
      name: "Note",
      selector: "note",
      cell: (row) => <small className="text-light-grey font-smaller">{row["note"]}</small>,
      wrap: false,
    },
  ];

  const tableList = [
    {
      appoinment: "26/05/2021",
      patientname: "Shane Warne",
      provider: "Harris Marcus",
      billed: "$1.122.00",
      adjustment: "$0.00",
      ptPaid: "$222",
      postedDate: "12/05/2021",
      note: "Appoinment Changes",
    },
    {
      appoinment: "26/05/2021",
      patientname: "Shane Warne",
      provider: "Harris Marcus",
      billed: "$1.122.00",
      adjustment: "$0.00",
      ptPaid: "$222",
      postedDate: "12/05/2021",
      note: "Appoinment Changes",
    },
    {
      appoinment: "26/05/2021",
      patientname: "Shane Warne",
      provider: "Harris Marcus",
      billed: "$1.122.00",
      adjustment: "$0.00",
      ptPaid: "$222",
      postedDate: "12/05/2021",
      note: "Appoinment Changes",
    },
    {
      appoinment: "26/05/2021",
      patientname: "Shane Warne",
      provider: "Harris Marcus",
      billed: "$1.122.00",
      adjustment: "$0.00",
      ptPaid: "$222",
      postedDate: "12/05/2021",
      note: "Appoinment Changes",
    },
    {
      appoinment: "26/05/2021",
      patientname: "Shane Warne",
      provider: "Harris Marcus",
      billed: "$1.122.00",
      adjustment: "$0.00",
      ptPaid: "$222",
      postedDate: "12/05/2021",
      note: "Appoinment Changes",
    },
    {
      appoinment: "26/05/2021",
      patientname: "Shane Warne",
      provider: "Harris Marcus",
      billed: "$1.122.00",
      adjustment: "$0.00",
      ptPaid: "$222",
      postedDate: "12/05/2021",
      note: "Appoinment Changes",
    },
    {
      appoinment: "26/05/2021",
      patientname: "Shane Warne",
      provider: "Harris Marcus",
      billed: "$1.122.00",
      adjustment: "$0.00",
      ptPaid: "$222",
      postedDate: "12/05/2021",
      note: "Appoinment Changes",
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
          <small className="text-base-black fw-bold">Transactions by Appointment</small>
        </div>

        <div className="mt-3 bg-light-grey-two p-3 d-flex align-items-center">
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
        <div className="bg-white">
          <div className="d-flex flex-row-reverse align-items-center py-3">
            <button className="btn text-primary">
              <FileExport size="15" className="text-primary me-2" /> Export file
            </button>
            <button className="btn text-primary me-3">
              <Printer size="15" className="text-primary me-2" /> Print
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
export default Transactions;
