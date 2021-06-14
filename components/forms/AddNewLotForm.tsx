import React from "react";
//react bootstrap
import { Form, Dropdown } from "react-bootstrap";
import { CustomDropDown } from "components/dropdown";

const AddNewLotForm = () => {
  return (
    <div>
      <div className="row gy-4">
        <div className="col-6">
          <Form.Label>Category</Form.Label>
          <CustomDropDown
            optionsList={[
              {
                title: "All",
                textStyles: "text-dark-grey fw-normal",
              },
            ]}
            placeholder="Select "
          />
        </div>
        <div className="col-6">
          <Form.Label>Code</Form.Label>
          <Form.Control placeholder="Enter Here" className="font-smaller py-2 br-10" />
        </div>
        <div className="col-6">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control placeholder="Enter Here" className="font-smaller py-2 br-10" />
        </div>
        <div className="col-6">
          <Form.Label>Expiration</Form.Label>
          <Form.Control placeholder="Enter Here" className="font-smaller py-2 br-10" />
        </div>
        <div className="col-6">
          <Form.Label>Quantity</Form.Label>
          <Form.Control placeholder="Enter Here" className="font-smaller py-2 br-10" />
        </div>
        <div className="col-6">
          <Form.Label>Cost</Form.Label>
          <Form.Control placeholder="Enter Here" className="font-smaller py-2 br-10" />
        </div>
        <div className="col-12">
          <input type="radio" /> Product
          <input type="radio" className="ms-4" /> Service
        </div>
      </div>
    </div>
  );
};

export default AddNewLotForm;
