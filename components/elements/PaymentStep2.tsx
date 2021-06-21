import React, { FC } from "react";
//icons
import { CcPaypal, CcMastercard, CcVisa, CcDiscover } from "components/styled-icons";
import { Americanexpress } from "components/styled-icons";
//react bootstrap
import { Form } from "react-bootstrap";

interface IPayProps {
  setCurrent?: any;
}

const PaymentStep2: FC<IPayProps> = ({ setCurrent }) => {
  return (
    <div>
      <div className="my-3">
        <small className="text-muted">How do you want to pay</small>
      </div>
      <div className="border-top py-4">
        <h6>Enter payment information</h6>
        <small className="text-muted">
          We accept payments via bank accounts and following credit card brands
        </small>
        <div className="d-flex my-3">
          <CcPaypal size="30" className="mx-1" />
          <CcMastercard size="30" className="mx-1" />
          <CcVisa size="30" className="mx-1" />
          <Americanexpress size="30" className="mx-1" />
          <CcDiscover size="30" className="mx-1" />
        </div>
        <div className="d-flex border-bottom my-4">
          <h6 className="m-0 border-primary border-bottom">Credit Card</h6>
          <h6 className="mx-3">Razor Pay</h6>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>Card Holder Name</Form.Label>
              <div>
                <Form.Control placeholder="***********" />
              </div>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Card Number</Form.Label>
              <div>
                <Form.Control placeholder="***********" />
              </div>
            </Form.Group>
            <div className="row mt-3">
              <div className="col-md-6 col-12">
                <Form.Group>
                  <Form.Label>Valid Thru</Form.Label>
                  <div>
                    <Form.Control placeholder="--/--" />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6 col-12">
                <Form.Group>
                  <Form.Label>CVV</Form.Label>
                  <div>
                    <Form.Control placeholder="---" />
                  </div>
                </Form.Group>
              </div>
              <Form.Group className="mt-3">
                <button
                  className="btn btn-primary text-white"
                  onClick={() => setCurrent("medication")}
                >
                  Pay Now
                </button>
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <small className="fw-bold">Or Pay Later -</small>
        </div>
        <div className="mt-3">
          <small className="text-muted">
            A temporary hold is charged which would covered upon completion of appointment.{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep2;
