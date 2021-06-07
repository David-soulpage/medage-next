import React, { FC } from "react";
// react-boostrap
import { Form } from "react-bootstrap";
// formik
import { useFormik } from "formik";

const AddStudy: FC = () => {
  const formik = useFormik({
    initialValues: {
      patientId: "",
      patientName: "",
      referredBy: "",
      scanType: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h6 className="fw-bold text-base-black m-0">Add New Study</h6>
      <div className="row mt-5">
        <div className="col-12 col-lg-8">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <Form.Group className="w-100 me-4">
              <Form.Label>Patient ID</Form.Label>
              <Form.Control
                placeholder="Enter Here"
                className="input-height"
                name="patient_id"
                value={formik.values.patientId}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="w-100">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                placeholder="Enter Here"
                className="input-height"
                name="patient_name"
                value={formik.values.patientName}
                onChange={formik.handleChange}
              />
            </Form.Group>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mt-md-2">
            <Form.Group className="w-100 me-4">
              <Form.Label>Referred by</Form.Label>
              <Form.Control
                placeholder="Enter Here"
                className="input-height"
                name="referred_by"
                value={formik.values.referredBy}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="w-100">
              <Form.Label>Scan Type</Form.Label>
              <Form.Control
                as="select"
                placeholder="Select..."
                className="input-height"
                name="scan_type"
                value={formik.values.scanType}
                onChange={formik.handleChange}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <Form.Group className="w-100">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Type Here"
              as="textarea"
              rows={5}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Form.Group>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-4 col-12">
          <Form.Group>
            <Form.Label>Upload Image</Form.Label>
            <div className="p-3 bg-secondary rounded">
              <Form.File
                id="exampleFormControlFile1"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
              />
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="d-flex mt-5">
        <button className="btn p-0">Cancel</button>
        <button className="btn  rounded btn-primary px-5 text-white shadow-sm btn-sm ms-5">
          Save
        </button>
      </div>
    </Form>
  );
};
export default AddStudy;
