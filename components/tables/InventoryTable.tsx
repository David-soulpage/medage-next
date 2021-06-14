import React, { FC } from "react";
//local component
import DataTable from "react-data-table-component";
//icons
import { PhoneAlt } from "components/styled-icons";
import { MessageSquare } from "components/styled-icons";

const InventoryTable: FC = () => {
  const tableData = [
    {
      lot: "101",
      name: "Hopital Stretcher",
      manufacturer: "ABC works Manufacturing ",
      expiration: "New Jersey",
      quantity: "121/200",
      price: "$1289",
    },
    {
      lot: "101",
      name: "Hopital Stretcher",
      manufacturer: "ABC works Manufacturing ",
      expiration: "New Jersey",
      quantity: "121/200",
      price: "$1289",
    },
    {
      lot: "101",
      name: "Hopital Stretcher",
      manufacturer: "ABC works Manufacturing ",
      expiration: "New Jersey",
      quantity: "121/200",
      price: "$1289",
    },
    {
      lot: "101",
      name: "Hopital Stretcher",
      manufacturer: "ABC works Manufacturing ",
      expiration: "New Jersey",
      quantity: "121/200",
      price: "$1289",
    },
    {
      lot: "101",
      name: "Hopital Stretcher",
      manufacturer: "ABC works Manufacturing ",
      expiration: "New Jersey",
      quantity: "121/200",
      price: "$1289",
    },
    {
      lot: "101",
      name: "Hopital Stretcher",
      manufacturer: "ABC works Manufacturing ",
      expiration: "New Jersey",
      quantity: "121/200",
      price: "$1289",
    },
  ];
  const columns = [
    {
      name: "Lot",
      selector: "lot",
    },
    {
      name: "Name",
      selector: "name",
    },
    {
      name: "Manufacturer",
      selector: "manufacturer",
    },
    {
      name: "Expiration",
      selector: "expiration",
    },
    {
      name: "Quantity",
      selector: "quantity",
    },
    {
      name: "Price",
      selector: "price",
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
        height: "60px",
        fontSize: "16px",
        fontWeight: "normal",
      },
    },
  };
  return <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />;
};

export default InventoryTable;
