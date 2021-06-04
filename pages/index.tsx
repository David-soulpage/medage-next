// react
import React, { FC } from "react";
// react-boostrap
import { Image, Form } from "react-bootstrap";
// forms
import Signin from "@components/forms/signin";
// layouts
import { AuthPageLayout } from "layouts";

const Home: FC = () => {
  return (
    <AuthPageLayout>
      <div className="border" style={{ height: "95vh" }}>
        <div className="h-100">
          <p>gowthami</p>
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
  );
};
export default Home;
