import React, { FC } from "react";
// boostrap
import { Form, FormControl, FormGroup, FormLabel, InputGroup, Dropdown } from "react-bootstrap";
// styled-icons
import { ArrowDropDown } from "@styled-icons/remix-line";

interface IProps {}

const CustomDropDown: FC<IProps> = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="w-100 bg-white border br-10" id="dropdown-basic">
        <div className="w-100 d-flex flex-row-reverse align-items-center">
          <ArrowDropDown size="25"></ArrowDropDown>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
        <Dropdown.Item href="#/action-1" selected>
          Mother
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1">Father</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default CustomDropDown;
