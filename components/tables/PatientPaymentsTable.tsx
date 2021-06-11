import { FC } from "react";

//react data table
import DataTable from "react-data-table-component";
//icons
import { Refresh } from "components/styled-icons";

const PatientPaymentsTable: FC = () => {
  const tableData = [
    {
      chartId: "AS000123",
      name: "Shane Warne",
      unallocatedBalance: "$11134",
      totalPayment: "$123",
      unallocatedPayment: "$0.00",
    },
    {
      chartId: "AS000123",
      name: "Shane Warne",
      unallocatedBalance: "$11134",
      totalPayment: "$123",
      unallocatedPayment: "$0.00",
    },
    {
      chartId: "AS000123",
      name: "Shane Warne",
      unallocatedBalance: "$11134",
      totalPayment: "$123",
      unallocatedPayment: "$0.00",
    },
    {
      chartId: "AS000123",
      name: "Shane Warne",
      unallocatedBalance: "$11134",
      totalPayment: "$123",
      unallocatedPayment: "$0.00",
    },
    {
      chartId: "AS000123",
      name: "Shane Warne",
      unallocatedBalance: "$11134",
      totalPayment: "$123",
      unallocatedPayment: "$0.00",
    },
    {
      chartId: "AS000123",
      name: "Shane Warne",
      unallocatedBalance: "$11134",
      totalPayment: "$123",
      unallocatedPayment: "$0.00",
    },
  ];
  const columns = [
    {
      name: "Chart ID",
      selector: "chartId",
    },
    {
      name: "Patient Name",
      selector: "name",
    },
    {
      name: "Unallocated Balance",
      selector: "unallocatedBalance",
    },
    {
      name: "Total Payment",
      selector: "totalPayment",
    },
    {
      name: "Unallocated Payment",
      selector: "unallocatedPayment",
    },
    {
      name: "Report",
      cell: (row) => (
        <div>
          <button className="btn btn-outline-primary btn-sm">
            <Refresh size="20" className="text-primary" />
            Auto Fill
          </button>{" "}
        </div>
      ),
    },
  ];

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
      },
    },
  };
  return (
    <div>
      <DataTable noHeader columns={columns} data={tableData} customStyles={customStyles} />
    </div>
  );
};

export default PatientPaymentsTable;
