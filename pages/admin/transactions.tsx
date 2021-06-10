import React from "react";
//local components
import AdminLayout from "@layouts/AdminLayout";
import { CommonCard } from "@components/card";
import { TransactionTable } from "@components/tables";
//react bootstrap
import { Form, Dropdown } from "react-bootstrap";
//lodash
import _ from "lodash";
//icons
import { ChevronDown, Filter, Printer } from "styled-icons/bootstrap";
import { Open } from "@styled-icons/fluentui-system-filled";

const Transactions = () => {
  return (
    <AdminLayout>
      <div className="container mt-3">
        <CommonCard>
          <div className="d-flex p-2">
            <h6 className="m-0">Transactions by Appointment</h6>
          </div>
          <div className="d-flex my-3 border bg-light p-2 align-items-center">
            <div className="me-3">
              <small className="m-0 text-muted">Date of Service</small>
            </div>
            <div className="me-3">
              <Form.Control placeholder="Date Picker" />
            </div>
            <div className="me-3">
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  Patient <ChevronDown size="20" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="me-3">
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  Office <ChevronDown size="20" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="me-3">
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  All exams room <ChevronDown size="20" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="ms-auto">
              <button className="btn btn-primary text-white">
                <Filter size="20" /> Update all Fillters
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="text-primary me-3">
              <Printer size="20" className="text-primary" /> Printer
            </div>
            <div className="text-primary">
              <Open size="20" className="text-primary" /> Explore File
            </div>
          </div>
          <div className="mt-3">
            <TransactionTable />
          </div>
        </CommonCard>
      </div>
    </AdminLayout>
  );
};

export default Transactions;
