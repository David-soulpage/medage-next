// react
import React, { FC, useState } from "react";
// formik
import { useFormik } from "formik";
// boostrap
import { Form, FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";
// styled icons
import { EyeFill, EyeSlashFill } from "@styled-icons/bootstrap/";

const SignIn: FC = () => {
  const [showPassword, setPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      userName: "",
      referralCode: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onPressEye = () => {
    setPassword(!showPassword);
  };
  return (
    <Form className="p-3 pt-4" onSubmit={formik.handleSubmit}>
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Full Name</Form.Label>
        <Form.Control
          name="fullName"
          type="text"
          placeholder="Shane Warne"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          className="font-smaller py-3 br-10"
          size="sm"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Email Address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="shanewarne.admin@gmail.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="font-smaller py-3 br-10"
          size="sm"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">User Name</Form.Label>
        <Form.Control
          type="text"
          name="userName"
          placeholder="Shane Warne"
          onChange={formik.handleChange}
          value={formik.values.userName}
          className="font-smaller py-3 br-10"
          size="sm"
        />
      </Form.Group>
      <FormGroup className="mb-2 ">
        <Form.Label className="text-base-black fw-normal">Password</Form.Label>
        <InputGroup className="py-2 br-10 border bg-white">
          <FormControl
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            size="sm"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border-0"
          />
          <InputGroup.Append className="border-0">
            <div className=" bg-white px-3 py-2" onClick={onPressEye}>
              {showPassword ? (
                <EyeFill size="20" className="text-light-grey" />
              ) : (
                <EyeSlashFill size="20" className="text-light-grey" />
              )}
            </div>
          </InputGroup.Append>
        </InputGroup>
      </FormGroup>
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Referral code</Form.Label>
        <Form.Control
          name="referralCode"
          type="text"
          placeholder="0910991"
          onChange={formik.handleChange}
          value={formik.values.referralCode}
          className="font-smaller py-3 br-10"
          size="sm"
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions of Privacy Policy."
        />
      </Form.Group>
      <div className="my-3">
        <button
          type="submit"
          className="btn py-2 btn-primary text-white font-smaller w-100 rounded"
        >
          Create Account
        </button>
      </div>
      <div className="my-3">
        <button type="button" className="btn btn-white text-orange fw-bold w-100 rounded py-2">
          Sign Up With Google
        </button>
      </div>
      <div className="my-2">
        <small className="text-light-grey text-center">
          Already have an account? <small className="text-primary">Log in</small>
        </small>
      </div>
    </Form>
  );
};
export default SignIn;
