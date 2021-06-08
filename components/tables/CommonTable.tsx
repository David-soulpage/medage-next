// react
import React, { FC } from "react";
// data-table
import DataTable from "react-data-table-component";

interface Iprops {
  tableData: Array<any>;
  columns: Array<any>;
  customStyles: any;
  noHeader?: boolean;
}

const CommonTable: FC<Iprops> = ({ tableData, columns, customStyles, noHeader }) => {
  return (
    <DataTable noHeader={noHeader} columns={columns} data={tableData} customStyles={customStyles} />
  );
};

export default CommonTable;
