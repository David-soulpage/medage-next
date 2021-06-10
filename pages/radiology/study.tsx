// react
import React, { FC } from "react";
// local components
import StudyList from "components/elements/StudyList";
import RadiologyLayout from "layouts/RadiologyLayout";
// react-bbostrap
import { Form, InputGroup, Dropdown } from "react-bootstrap";
// icons
import { Search } from "@styled-icons/boxicons-regular";

const Study: FC = () => {
  const HeaderButtons = () => {
    return (
      <div className="d-flex align-items-center justify-content-between ">
        <div className="d-flex align-items-center">
          <h6 className=" fw-bold m-0 me-5">Present Study List</h6>
          <h6 className="fw-bold m-0">Completed Study List</h6>
        </div>
        <div className="d-flex align-items-center">
          <InputGroup className="bg-light rounded px-2 d-flex align-items-center me-2 ">
            <Form.Control placeholder="Search patients ID, Name" className="bg-light border-0" />
            <InputGroup.Append className="bg-light">
              <Search className="" size="20" />
            </InputGroup.Append>
          </InputGroup>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic" className="border ms-2 me-2">
              Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button type="button" className="btn btn-outline-primary text-nowrap text-primary ">
            Download Full Study
          </button>
        </div>
      </div>
    );
  };

  return (
    <RadiologyLayout>
      <div className="card p-3">
        <HeaderButtons />
        <StudyList />
      </div>
    </RadiologyLayout>
  );
};

export default Study;
