// react
import React, { FC } from "react";
// boostrap
import { Modal, Form } from "react-bootstrap";

// styled icons
import { Attachment, Cross } from "components/styled-icons";
// formik
import { useFormik } from "formik";

interface IProps {
  show: boolean;
  handleClose: () => void;
}

const RadiologyMessagesModal: FC<IProps> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      subject: "",
      message: "",
    },
    onSubmit: (values) => console.log(values),
  });
  const onClose = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="rounded">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header>
          <h6 className="text-base-black fw-bold">New message</h6>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="btn btn-secondary ">
              Shane Warne <Cross size="15" className="text-light-purple" />
            </div>
          </div>
          <div>
            <Form.Group>
              <Form.Control
                placeholder="Subject"
                className="mt-3 input-height input-border-bottom text-light-grey"
                value={formik.values.subject}
                onChange={formik.handleChange}
                name="subject"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Your message"
                className="mt-3 input-height input-border-bottom input-textarea text-light-grey"
                as="textarea"
                value={formik.values.message}
                onChange={formik.handleChange}
                name="message"
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Attachment size="15" className="text-light-purple" />
          <button className="btn fw-bold" type="button" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary rounded text-white" type="submit" onClick={onClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
export default RadiologyMessagesModal;
