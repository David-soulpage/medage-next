// react
import React, { FC } from "react";
// react-boostrap
import { Modal, Form } from "react-bootstrap";
// formik
import { useFormik } from "formik";
// date-picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ImodalProps {
  show: any;
  handleClose: any;
}
const AddTaskModal: FC<ImodalProps> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      date: null,
      time: null,
      patient_case_study: "",
      description: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Header>
          <h6 className="text-base-black fw-bold">Add Task</h6>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mt-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Enter Here"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="input-height"
              size="sm"
            />
          </Form.Group>
          <div className="d-flex mt-2">
            <Form.Group className="d-flex flex-column">
              <Form.Label>Date</Form.Label>
              <DatePicker
                name="date"
                selected={formik.values.date}
                onChange={(date) => formik.setFieldValue("date", date)}
                className="input-height form-control"
              />
            </Form.Group>
            <Form.Group className="ms-4">
              <Form.Label>Time</Form.Label>
              <Form.Control
                placeholder="Enter Here"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                className="input-height"
                size="sm"
              />
            </Form.Group>
          </div>
          <Form.Group className="mt-2">
            <Form.Label>Patient Case study</Form.Label>

            <Form.Control
              placeholder="Enter Here"
              name="patient_case_study"
              value={formik.values.patient_case_study}
              onChange={formik.handleChange}
              className="input-height"
              size="sm"
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Enter Here"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="input-height"
              size="sm"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="bg-secondary">
          <button className="btn px-5" type="button" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary text-white" type="submit" onClick={handleClose}>
            Save
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
