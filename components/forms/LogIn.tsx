// react
import React, { FC, useState } from "react";
//router
import { useRouter } from "next/router";
// formik
import { useFormik } from "formik";
// boostrap
import { Form, FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";
// styled icons
import { EyeFill, EyeSlashFill } from "components/styled-icons/";
//signup
import AuthService from "lib/services/auth.service";

const LogIn: FC = () => {
  const [showPassword, setPassword] = useState(false);
  const authService = new AuthService();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      authService
        .logIn(values)
        .then((res) => {
          console.log(res, "login");
          authService
            .userDetails()
            .then((res) => {
              console.log(res, "User_details");
              if (res.role === "Doctor") router.push(`/doctor/${res.id}/dashboard`);
              else if (res.role === "Nurse") router.push(`/nurse/${res.id}/dashboard`);
              else if (res.role === "Recptionist") router.push(`/receptionist/${res.id}/dashboard`);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const onPressEye = () => {
    setPassword(!showPassword);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="UserName"
          onChange={formik.handleChange}
          value={formik.values.username}
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

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me " />
      </Form.Group>
      <div className="my-3">
        <button
          type="submit"
          className="btn py-2 btn-primary text-white font-smaller w-100 rounded"
        >
          Login
        </button>
      </div>
    </Form>
  );
};
export default LogIn;