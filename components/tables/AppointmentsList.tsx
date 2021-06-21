import { FC } from "react";
//next
import Link from "next/link";
//react data table
import DataTable from "react-data-table-component";

const AppointmentsList: FC = () => {
  // Sample Table Data
  const tableData = [
    {
      priority: 1,
      patientId: 1000752,
      patientName: "Veronika S",
      referrel: "Dr. Albert",
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      referrel: "Dr. Albert",
    },
    {
      priority: 3,
      patientId: 1000752,
      patientName: "Veronika S",
      referrel: "Dr. Albert",
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      referrel: "Dr. Albert",
    },
    {
      priority: 1,
      patientId: 1000752,
      patientName: "Veronika S",
      referrel: "Dr. Albert",
    },
    {
      priority: 3,
      patientId: 1000752,
      patientName: "Veronika S",
      referrel: "Dr. Albert",
    },
    {
      priority: 2,
      patientId: 1000752,
      patientName: "Veronika S",
      referrel: "Dr. Albert",
    },
  ];
  // Header for each Column
  const columns = [
    {
      name: "Priority",
      selector: "priority",
      cell: (row) => <div>!!</div>,
    },
    {
      name: "Patient ID",
      selector: "patientId",
    },
    {
      name: "Patient Name",
      selector: "patientName",
    },
    {
      name: "Referrel",
      selector: "referrel",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <Link href="/doctor/1/patient/summary">
            <button className="btn btn-sm bg-light-primary text-primary border border-primary">
              View
            </button>
          </Link>
        </div>
      ),
    },
  ];
  // Table Styles
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
    rows: {
      style: {
        borderRadius: "10px",
        border: "1px solid #ECECF2",
        marginTop: "5px",
        height: "60px",
        fontSize: "16px",
        color: "#44444f",
        fontWeight: "normal",
      },
    },
  };

  return <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />;
};

export default AppointmentsList;
