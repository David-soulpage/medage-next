// react
import React, { FC, useState } from "react";
// react-boostrap
import { Image } from "react-bootstrap";
// forms
import LogIn from "components/forms/LogIn";
// layouts
import { AuthPageLayout } from "layouts";
import Loader from "components/elements/Loader";

const Login: FC = () => {
  const [isLoading, setLoadingStatus] = useState(false);

  const onAction = () => {
    setLoadingStatus(!isLoading);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <AuthPageLayout>
          <div className="col-md-6 text-center align-self-center ">
            <Image className="img-fluid" src="/home.png" width="500" />
          </div>
          <div className="col-md-6 bg-light-primary border align-items-center d-flex">
            <div className="mx-auto">
              <h4 className="text-base-black fw-bold mb-3 me-auto">Welcome to Iatros</h4>
              <LogIn onAction={onAction} />
            </div>
          </div>
        </AuthPageLayout>
      )}
    </>
  );
};

export default Login;
