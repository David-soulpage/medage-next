// react
import React, { FC, useState } from "react";
// react-boostarap
import { Modal, Form } from "react-bootstrap";
// components
import { ModalBody, ModalFooter, ModalHeader } from "./CommonModal";
import AllowedOptionsElement from "components/elements/AllowedOptionsElement";

interface IProps {
  label: string;
  optionsList: Array<any>;
  show: boolean;
  onClose: () => void;
}

const FormBuilderModal: FC<IProps> = ({ label, optionsList, show, onClose }) => {
  const [labelText, setLabelText] = useState("");

  const handleCancel = () => {
    onClose();
  };

  const handleChange = (e: any) => {
    setLabelText(e.target.value);
  };
  return (
    <Modal centered show={show} className="w-75">
      <ModalHeader>
        <h6>Edit Field</h6>
      </ModalHeader>
      <ModalBody>
        <Form.Group controlId="formBasicEmail" className="mb-2 w-100 w-md-50">
          <Form.Label className="text-base-black fw-normal">Lable Name</Form.Label>
          <Form.Control
            name="fullName"
            type="text"
            placeholder="Shane Warne"
            onChange={handleChange}
            value={labelText}
            className="font-smaller py-3 br-10"
            size="sm"
          />
        </Form.Group>
        <Form.Label className="text-base-black fw-normal">Allowed Values</Form.Label>
        {optionsList.map((ele, index) => {
          return <AllowedOptionsElement key={index} />;
        })}
      </ModalBody>
      <ModalFooter>
        <div className="ms-auto">
          <button className="btn me-4" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-primary text-white">Save</button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
export default FormBuilderModal;
