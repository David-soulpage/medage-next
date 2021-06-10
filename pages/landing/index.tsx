import React from "react";
//local components
import { CommonCard } from "components/card";
//icons
import { Location } from "@styled-icons/icomoon";
import { Search, CameraVideoFill } from "@styled-icons/bootstrap";
//lodash
import _ from "lodash";

const Index = () => {
  const options = ["Search Doctors", "Schedule Appointment", "Health Records", "Online payment"];
  return (
    <div>
      {/* First Section */}
      <div style={{ background: "#eeeeee", height: "100vh" }}>
        <div className="container py-3 h-100">
          <div className="card shadow-sm border-0 py-2 px-3">
            <div className="d-flex justify-content-between align-items-center">
              <img src="/logo.svg" alt="Logo" height="42px" />
              <div className="d-flex w-100 justify-content-center">
                <h6 className="m-0 border-primary border-bottom border-2">Home</h6>
                <h6 className="mx-4">Find a Doctor</h6>
                <h6 className="m-0">About Us</h6>
              </div>
              <button className="btn btn-warning text-white home-button-border">Login</button>
            </div>
          </div>
          <div className="row h-100">
            <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
              <h1>Find your doctor & make An Appointment</h1>
              <h5 className="text-muted">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts.
              </h5>
              <div className="d-flex mt-2 w-100">
                <div className="bg-primary rounded p-2 d-flex w-100 me-2">
                  <h6 className="text-white border-end border-white me-4 m-0 w-100">
                    Condition, Procedure, Doctor..
                  </h6>
                  <div className="d-flex w-100">
                    <h6 className="text-white m-0">Location</h6>
                    <Location size="20" className="text-white ms-auto" />
                  </div>
                </div>
                <button className="btn btn-warning text-white home-button-border ms-auto">
                  <Search size="20" className="text-white" />
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-12 d-flex justify-content-between align-items-center"
              style={{
                backgroundImage: `url(/doctor.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex justify-content-center w-100">
                <div className="card border-0 p-3">
                  <div className="d-flex flex-column align-items-center">
                    <CameraVideoFill size="20" className="text-primary" />
                    <div className="mt-3">
                      <small>Video Meeting</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex w-100"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="container d-flex flex-column justify-content-between mt-5">
        <h3 className="text-center">4 Easy Steps and get your Solution</h3>
        <h5 className="text-muted text-center mt-4">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries for previewing layouts.
        </h5>
        <div className="row mt-4">
          {_.map(options, (option, id) => (
            <div key={id} className="col-lg-3 col-md-6 col-12">
              <div className="card p-2 border-0">
                <div className="d-flex flex-column align-items-center">
                  <div className="border p-5 w-100"></div>
                  <h5 className="mt-3">{option}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Third Section */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
            <h2>consult with the best Sp. Dermatology and solved the problem</h2>
            <h6 className="text-muted mt-3 border-start border-3 border-primary ps-2">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts. Lorem ipsum is placeholder text commonly used in
              the graphic, print, and publishing industries for previewing layouts.
            </h6>
          </div>
          <div className="col-md-6 col-12 linear-background d-flex justify-content-end">
            <img src="/doctor2.png" alt="Image" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 col-12 d-flex">
            <img
              src="/doctorGroup.png"
              alt="Image"
              style={{ borderRadius: "55px 55px 0px 55px" }}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start">
            <h2>About Us</h2>
            <h6 className="text-muted mt-3 border-start border-3 border-primary ps-2">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts. Lorem ipsum is placeholder text commonly used in
              the graphic, print, and publishing industries for previewing layouts.
            </h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-start">
            <h2>Satisfied Patent Reviews</h2>
            <h6 className="text-muted mt-3 border-start border-3 border-primary ps-2">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts. Lorem ipsum is placeholder text commonly used in
              the graphic, print, and publishing industries for previewing layouts.
            </h6>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-end">
            <div
              className="bg-primary text-white p-4"
              style={{ borderRadius: "55px 55px 0px 55px" }}
            >
              <h6>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing layouts.{" "}
              </h6>
              <div className="d-flex align-items-center">
                <img
                  src="/profile.jpg"
                  alt="Profile Image"
                  height="52px"
                  width="52px"
                  className="rounded-circle me-3"
                />
                <div>
                  <h6>Nick Jonas</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
