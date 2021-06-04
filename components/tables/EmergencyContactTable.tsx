import React, { FC } from "react";
//local component
import DataTable from "react-data-table-component";
//icons
import { PhoneAlt } from "@styled-icons/fa-solid";
import { MessageSquare } from "@styled-icons/evaicons-solid";

const EmergencyContactTable: FC = () => {
  const tableData = [
    {
      name: "Dwayne johnon",
      relation: "Father",
      contact: "040-9887986",
      location: "New Jersey",
      udpate: "15/01/2021",
    },
    {
      name: "Dwayne johnon",
      relation: "Father",
      contact: "040-9887986",
      location: "New Jersey",
      udpate: "15/01/2021",
    },
    {
      name: "Dwayne johnon",
      relation: "Father",
      contact: "040-9887986",
      location: "New Jersey",
      udpate: "15/01/2021",
    },
  ];
  const columns = [
    {
      name: "Name",
      selector: "name",
    },
    {
      name: "Relation",
      selector: "relation",
    },
    {
      name: "Contact Number",
      selector: "contact",
    },
    {
      name: "Location",
      selector: "location",
    },
    {
      name: "Last Updated date",
      selector: "udpate",
    },

    {
      name: "Action",
      cell: (row) => (
        <div>
          <PhoneAlt className="mx-2 text-success" size="20" />
          <MessageSquare className="mx-2 text-muted" size="20" />
        </div>
      ),
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        background: "rgba(245, 245, 250, 0.4)",
        color: "#1E2233",
        fontSize: "14px",
        border: "none",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };
  return <DataTable columns={columns} data={tableData} customStyles={customStyles} />;
};

export default EmergencyContactTable;
