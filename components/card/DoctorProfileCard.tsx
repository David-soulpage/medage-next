// react
import React from "react";

const DoctorProfileCard = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="Profile Image"
        height="100px"
        width="100px"
        className="rounded-circle img-fit"
      />
      <small className="mt-3">Dr. Willkins Axe</small>
      <small className="my-1">Demotologist</small>
      <small className="m-0">will.axe@gmail.com</small>
    </div>
  );
};

export default DoctorProfileCard;
