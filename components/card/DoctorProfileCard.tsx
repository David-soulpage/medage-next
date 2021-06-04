import React from "react";

const DoctorProfileCard = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img
        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="Profile Image"
        height="100px"
        width="100px"
        className="rounded-circle"
      />
      <h6 className="title m-0 my-4">Dr. Willkins Axe</h6>
      <h6 className="sub-title m-0">Demotologist</h6>
      <h6 className="sub-title m-0 mt-4">will.axe@gmail.com</h6>
    </div>
  );
};

export default DoctorProfileCard;
