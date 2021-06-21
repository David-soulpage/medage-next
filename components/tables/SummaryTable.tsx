// react
import { Delete } from "@styled-icons/fluentui-system-regular";
import { Edit } from "@styled-icons/material";
import React, { FC } from "react";
//local component
import DataTable from "react-data-table-component";

const SummaryTable: FC = () => {
  const tableData = [
    {
      date: "Fever",
      date2: "Abdominal Pain",
      date3: "Cold",
      date4: "Cold",
      date5: "Fever",
    },
    {
      date: "Fever",
      date2: "Abdominal Pain",
      date3: "Cold",
      date4: "Cold",
      date5: "Fever",
    },
    {
      date: "Fever",
      date2: "Abdominal Pain",
      date3: "Cold",
      date4: "Cold",
      date5: "Fever",
    },
    {
      date: "Fever",
      date2: "Abdominal Pain",
      date3: "Cold",
      date4: "Cold",
      date5: "Fever",
    },
    {
      date: "Fever",
      date2: "Abdominal Pain",
      date3: "Cold",
      date4: "Cold",
      date5: "Fever",
    },
  ];
  const columns = [
    {
      name: "21/03/2021",
      selector: "date",
    },
    {
      name: "21/03/2021",
      selector: "date2",
    },
    {
      name: "21/03/2021",
      selector: "date3",
    },
    {
      name: "21/03/2021",
      selector: "date4",
    },
    {
      name: "21/03/2021",
      selector: "date5",
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "14px",
        borderBottom: "1px solid #ECECF2",
        borderTop: "1px solid #ECECF2",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "14px",
        fontWeight: "normal",
      },
    },
  };
  return <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />;
};

export default SummaryTable;
