// react
import React, { FC, useState } from "react";
// next
import Link from "next/link";
//router
import { useRouter } from "next/router";
// formik
import { useFormik } from "formik";
// boostrap
import { Form, FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";
// styled icons
import { EyeFill, EyeSlashFill } from "components/styled-icons/";
import { Google } from "components/styled-icons/";
import { CustomDropDown } from "components/dropdown";
//signup
import AuthService from "lib/services/auth.service";
import { useAppContext } from "contexts/global";

const SignIn: FC = () => {
  const [showPassword, setPassword] = useState(false);

  const context = useAppContext();
  const authService = new AuthService();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      role: "",
      mobile_number: "",
      password: "",
      tenant: null,
    },
    onSubmit: (values) => {
      authService
        .signUp(values)
        .then((res) => {
          authService
            .userDetails()
            .then((res) => {
              console.log(res, "User_details");
              context.globalDispatch({ type: "USER", payload: res });
              if (res.role === "Doctor") router.push(`/doctor/${res.id}/dashboard`);
              else if (res.role === "Nurse") router.push(`/nurse/${res.id}/dashboard`);
              else if (res.role === "Recptionist") router.push(`/receptionist/${res.id}/dashboard`);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  });

  const onPressEye = () => {
    setPassword(!showPassword);
  };

  const getDropdownValue = (name, value) => {
    formik.setFieldValue(name, value);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Full Name</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Shane Warne"
          onChange={formik.handleChange}
          value={formik.values.username}
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
      {/* <Form.Group controlId="formBasicEmail" className="mb-2">
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
      </Form.Group> */}
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Role</Form.Label>
        <CustomDropDown
          optionsList={[
            {
              title: "Doctor",
              textStyles: "text-dark-grey fw-normal",
            },
            {
              title: "Nurse",
              textStyles: "text-dark-grey fw-normal",
            },
            {
              title: "Receptionist",
              textStyles: "text-dark-grey fw-normal",
            },
            {
              title: "Radiologist",
              textStyles: "text-dark-grey fw-normal",
            },
          ]}
          placeholder="Choose Role"
          styles={{ buttonStyles: "py-3", textStyles: "" }}
          onSelectValue={(value) => getDropdownValue("role", value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Organisation</Form.Label>
        <CustomDropDown
          optionsList={[
            {
              title: "Sunshite",
              label: 1,
              textStyles: "text-dark-grey fw-normal",
            },
            {
              title: "Max",
              label: 2,
              textStyles: "text-dark-grey fw-normal",
            },
          ]}
          placeholder="Choose Organisation"
          styles={{ buttonStyles: "py-3", textStyles: "" }}
          onSelectValue={(value) => getDropdownValue("tenant", value)}
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
      {/* <Form.Group controlId="formBasicEmail" className="mb-2">
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
      </Form.Group> */}
      <Form.Group controlId="formBasicEmail" className="mb-2">
        <Form.Label className="text-base-black fw-normal">Mobile Number</Form.Label>
        <Form.Control
          name="mobile_number"
          type="text"
          placeholder="0910991"
          onChange={formik.handleChange}
          value={formik.values.mobile_number}
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
      {/* Google Signup */}
      {/* <div className="my-3">
        <button type="button" className="btn bg-white text-orange fw-bold w-100 rounded py-2">
          <Google size="20" className="text-orange me-3" />
          Sign Up With Google
        </button>
      </div> */}
      <div className="my-2 d-flex align-self-center ">
        <small className="text-light-grey text-center">
          Already have an account?{" "}
          <small className="text-primary cr-p">
            <Link href="auth/login">Log in</Link>
          </small>
        </small>
      </div>
    </Form>
  );
};
export default SignIn;
