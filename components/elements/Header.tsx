// react
import React from "react";
// context
import { useAppContext } from "contexts/global";

const Header = () => {
  const { globalState } = useAppContext();
  console.log(globalState, "globalState123");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand pe-3" href="#">
          <span className="ms-3 fw-bold">Iatros</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#simpleNav"
          aria-controls="simpleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="simpleNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link " href="#">
                <h6 className="text-base-black fw-bold">Welcome, Jeevan Jessi</h6>
              </a>
            </li>
            <li className="nav-item ms-3">
              <img
                className="img-fluid"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png"
                width="40"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
