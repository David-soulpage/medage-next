// react
import React, { FC, useState } from "react";
// boostrap
import { Dropdown } from "react-bootstrap";
// styled-icons
import { ArrowDropDown } from "components/styled-icons";
// prop types
interface IProps {
  optionsList: Array<any>;
  placeholder: string;
}

const CustomDropDown: FC<IProps> = ({ optionsList, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className="w-100 bg-white border br-10" id="dropdown-basic">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div>
            {selectedValue === "" ? (
              <small className="text-light-grey fw-normal">{placeholder}</small>
            ) : (
              <small className="text-dark-grey fw-normal">{selectedValue}</small>
            )}
          </div>

          <ArrowDropDown size="25" className="text-light-grey"></ArrowDropDown>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
        {optionsList.map((ele, index) => {
          return (
            <Dropdown.Item eventKey={ele.title} key={index}>
              <small className={`${ele.textStyles}`}>{ele.title}</small>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default CustomDropDown;
