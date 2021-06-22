// react
import React, { FC, useState } from "react";
// react-boostrap
import { Form } from "react-bootstrap";
// styled-icons
import { CircleWithCross, MinusCircle } from "components/styled-icons";

interface IProps {}

const AllowedOptionsElement: FC<IProps> = (props) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e: any) => {
    setInputText(e.target.value);
  };
  return (
    <div className="row my-3">
      <div className="col-12 col-md-6">
        <Form.Control
          name="fullName"
          type="text"
          placeholder="Enter option value"
          onChange={handleChange}
          value={inputText}
          className="font-smaller py-3 br-10"
          size="sm"
        />
      </div>
      <div className="col-2">Move</div>
      <div className="col-2">
        <MinusCircle size="10" /> Default
      </div>
      <div className="col-2">
        <CircleWithCross size="10" />
        Remove
      </div>
    </div>
  );
};
export default AllowedOptionsElement;
