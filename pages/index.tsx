// react
import React, { FC } from "react";
// react-boostrap
import { Image, Form } from "react-bootstrap";
// forms
import Signin from "@components/forms/signin";
<<<<<<< HEAD

const Home: FC = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3 bg-white">
        <div>
          <Image src="/logo.svg" width="100" />
        </div>
        <div className="d-flex align-items-center">
          <h6 className="text-base-black fw-bold me-3">Login </h6>
          <h6 className="text-base-black fw-bold">Contact Us</h6>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <Image src="/home.png" className="img-fluid w-75" />
        </div>
        <div className="col h-100 bg-light-primary d-flex flex-column align-items-center py-5 ">
          <div>
            <h5 className="text-base-black fw-bold me-auto">Register to Iatros</h5>
          </div>
          <div className="w-75 d-flex flex-column">
            <Signin />
          </div>
        </div>
      </div>
    </>
=======
// layouts
import { AuthPageLayout } from "layouts";

const Home: FC = () => {
  return (
    <AuthPageLayout>
      <div className="border" style={{ height: "95vh" }}>
        <div className="h-100">
          <div className="row justify-content-center h-100">
            <div className="col-md-6 text-center align-self-center">
              <Image className="img-fluid" src="/home.png" width="500" />
            </div>

            <div className="col-md-6 h-100 bg-light border align-self-center align-items-center mx-auto">
              <Signin />
            </div>
          </div>
        </div>
      </div>
    </AuthPageLayout>
>>>>>>> d787a14d7de9a77705bd620e44a4bc667fefea36
  );
};
export default Home;
