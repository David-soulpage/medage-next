// react
import React, { FC } from "react";
// formik
import { useFormik } from "formik";
// boostrap
import { Form, FormControl, FormGroup, FormLabel, InputGroup, Dropdown } from "react-bootstrap";
// styled-icons
import { ArrowDropDown } from "@styled-icons/remix-line";

interface IProps {}

const PatientFamily: FC<IProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      guardianName: "",
      phoneNumber: "",
      address: "",
      age: "",
      relation: "",
      occupation: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="row w-85">
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Guardian Name</Form.Label>
            <Form.Control
              name="patientName"
              type="text"
              placeholder="Charlene Reed "
              onChange={formik.handleChange}
              value={formik.values.guardianName}
              className="font-smaller py-2 br-10"
              size="sm"
            />
          </Form.Group>
        </div>
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Phone Number</Form.Label>
            <Form.Control
              name="phoneNumber"
              type="text"
              placeholder="9989984350"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              className="font-smaller py-2 br-10"
              size="sm"
            />
          </Form.Group>
        </div>
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Address</Form.Label>
            <Form.Control
              name="address"
              type="text"
              placeholder="San Joss, California, USA"
              onChange={formik.handleChange}
              value={formik.values.address}
              className="font-smaller py-2 br-10"
              size="sm"
            />
          </Form.Group>
        </div>

        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Age</Form.Label>
            <Form.Control
              name="patientAge"
              type="text"
              placeholder="45"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="font-smaller py-2 br-10"
              size="sm"
            />
          </Form.Group>
        </div>
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Relation</Form.Label>
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
          </Form.Group>
        </div>
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Occupation</Form.Label>
            <Form.Control
              name="occupation}"
              type="text"
              placeholder="Business"
              onChange={formik.handleChange}
              value={formik.values.occupation}
              className="font-smaller py-2 br-10"
              size="sm"
            />
          </Form.Group>
        </div>

        <div className="col-12">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="Write a short description"
              onChange={formik.handleChange}
              value={formik.values.description}
              className="font-smaller py-2 br-10 "
              style={{ height: 100 }}
              size="sm"
            />
          </Form.Group>
        </div>
      </div>
      <div className="btn btn-primary text-white fw-bold font-smaller px-5 btn-lg mt-3">
        <small className="fw-bold text-white">Save and book</small>
      </div>
    </Form>
  );
};
export default PatientFamily;
