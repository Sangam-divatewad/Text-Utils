import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-light`}>
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${
            props.mode === "light" ? "black" : "white"
          }`}
          to={"/"}
        >
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "light" ? "black" : "white"
                }`}
                aria-current="page"
                to= {"/"}
              >
                Home
                
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "light" ? "black" : "white"
                }`}
                to= {"/about"}
              >
                About
                
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              style={{ cursor: "pointer" }}
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "black" : "white"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable dark mode"
                : "Disable dark mode"}
            </label>
            <Outlet/>
          </div>
        </div>
      </div>
    </nav>
  );
}
