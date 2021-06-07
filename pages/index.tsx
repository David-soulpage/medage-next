// react
import React, { FC } from "react";
// react-boostrap
import { Image } from "react-bootstrap";
// forms
import SignIn from "@components/forms/SignIn";
// layouts
import { AuthPageLayout } from "layouts";

const Home: FC = () => {
  return (
    <AuthPageLayout>
      <div className="col-md-6 text-center align-self-center ">
        <Image className="img-fluid" src="/home.png" width="500" />
      </div>
      <div className="col-md-6 bg-light-primary border align-items-center d-flex ">
        <div className="w-md-75 mx-auto">
          <h4 className="text-base-black fw-bold mb-3 me-auto">Register to Iatros</h4>
          <SignIn />
        </div>
      </div>
    </AuthPageLayout>
  );
};
export default Home;
