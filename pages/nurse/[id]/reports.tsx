// react
import React, { FC } from "react";
import Head from "next/head";
// components
import { CommonCard } from "components/card";
import { NurseDashboardLayout } from "layouts";
import { NurseReportsTable } from "components/tables";
//react bootstrap
import { InputGroup, Form } from "react-bootstrap";
//icons
import { Search } from "components/styled-icons";
import { CustomDropDown } from "components/dropdown";

interface IProps {}

const Reports: FC<IProps> = (props) => {
  return (
    <NurseDashboardLayout>
      <Head>
        <title>Payments</title>
      </Head>
      <div className="mx-4">
        <CommonCard>
          <div className="d-flex align-items-center">
            <h6>Reports List</h6>
            <div className="ms-auto d-flex align-items-center">
              <InputGroup className="bg-secondary px-2 rounded mt-4 mt-md-0 d-flex align-items-center br-10 me-3">
                <Form.Control
                  placeholder="Search  by ID, Name"
                  className="border-0 bg-secondary me-2 font-smaller"
                />
                <InputGroup.Append>
                  <Search size="20" />
                </InputGroup.Append>
              </InputGroup>
              <CustomDropDown
                optionsList={[
                  {
                    title: "All",
                    textStyles: "text-dark-grey fw-normal",
                  },
                ]}
                placeholder="Dr Fillmore"
              />
            </div>
          </div>
          <div className="mt-3">
            <NurseReportsTable />
          </div>
        </CommonCard>
      </div>
    </NurseDashboardLayout>
  );
};
export default Reports;
