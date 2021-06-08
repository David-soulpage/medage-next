// react
import React, { FC } from "react";
// formik
import { useFormik } from "formik";
// boostrap
import { Form, FormControl, FormGroup, FormLabel, InputGroup, Dropdown } from "react-bootstrap";
// styled-icons
import { ArrowDropDown } from "@styled-icons/remix-line";

interface IProps {}

const PatientPersonal: FC<IProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      patientName: "",
      phoneNumber: "",
      patientAge: "",
      bloodGroup: "",
      occupation: "",
      religion: "",
      gender: "",
      maritalStatus: "",
      address: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSelect = (value) => {
    formik.setFieldValue("gender", value);
  };
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="row w-85">
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Patient Name</Form.Label>
            <Form.Control
              name="patientName"
              type="text"
              placeholder="Shane Warne"
              onChange={formik.handleChange}
              value={formik.values.patientName}
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
              placeholder="Shane Warne"
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
              placeholder="Shane Warne"
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
              placeholder="Shane Warne"
              onChange={formik.handleChange}
              value={formik.values.patientAge}
              className="font-smaller py-2 br-10"
              size="sm"
            />
          </Form.Group>
        </div>
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Blood Group</Form.Label>
            <Form.Control
              name="bloodGroup"
              type="text"
              placeholder="Shane Warne"
              onChange={formik.handleChange}
              value={formik.values.bloodGroup}
              className="font-smaller py-2 br-10"
              size="sm"
            />
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

        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Religion</Form.Label>
            <Form.Control
              name="religion"
              type="text"
              placeholder="Business"
              onChange={formik.handleChange}
              value={formik.values.religion}
              className="font-smaller py-2 br-10"
              size="sm"
            />
          </Form.Group>
        </div>
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Gender</Form.Label>
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle className="w-100 bg-white border br-10" id="dropdown-basic">
                <div className="w-100 d-flex justify-content-between align-items-center">
                  <div>{formik.values.gender === "" ? "choose gender" : formik.values.gender}</div>

                  <ArrowDropDown size="25"></ArrowDropDown>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </div>
        <div className="col-md-6 col-lg-4">
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Label className="text-base-black fw-normal">Marital Status</Form.Label>
            <Form.Control
              name="maritalStatus"
              type="text"
              placeholder="Business"
              onChange={formik.handleChange}
              value={formik.values.maritalStatus}
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
      <div className="btn btn-primary text-white fw-bold font-smaller px-5 btn-lg mt-5">
        <small className="fw-bold text-white font-smaller">Submit</small>
      </div>
    </Form>
  );
};
export default PatientPersonal;
