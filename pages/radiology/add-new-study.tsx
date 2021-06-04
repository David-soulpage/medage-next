// react
import React, { FC } from "react";
// components
import RadiologyHeader from "@components/elements/RadiologyHeader";
// react-boostrap
import { Form } from "react-bootstrap";
// formik
import { useFormik } from "formik";

const AddNewStudy: FC = () => {
  const formik = useFormik({
    initialValues: {
      patient_id: "",
      patient_name: "",
      referred_by: "",
      scan_type: null,
      description: "",
      file: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <RadiologyHeader />
      <div className="p-2 bg-light"></div>
      <div className="p-5 ">
        <div className="card w-100 p-4">
          <div>
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
                        value={formik.values.patient_id}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="w-100">
                      <Form.Label>Patient Name</Form.Label>
                      <Form.Control
                        placeholder="Enter Here"
                        className="input-height"
                        name="patient_name"
                        value={formik.values.patient_name}
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
                        value={formik.values.referred_by}
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
                        value={formik.values.scan_type}
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
                        name="file"
                        value={formik.values.file}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewStudy;
