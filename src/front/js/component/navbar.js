import React from "react";
import { Link } from "react-router-dom";
import eva from "../../img/eva.jpeg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-info">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators"></div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.nikstech.com/images/resource/2.gif"
              className="img-fluid"
              style={{ width: "100rem" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <img
                src={eva}
                className="rounded-circle"
                style={{ width: "8rem" }}
              ></img>
              <h1
                className="display-1 "
                style={{
                  fontFamily: "Trebuchet MS",
                  fontWeight: "extrabold",
                }}
              >
                Evadne Olivo
              </h1>
              <div className="linea"></div>
              <h3>
                <strong style={{ fontFamily: "Trebuchet MS" }}>
                  Desarrolladora Full Stack
                </strong>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <h5 style={{ fontFamily: "sans-serif" }}>Evadne Olivo </h5>{" "}
          <h6 className="text-muted" style={{ fontFamily: "serif" }}>
            Desarrolladora Full Stack
          </h6>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav text-center">
            <h6>
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Portafolio
              </a>
            </h6>
            <h6>
              <a className="nav-link text-white" href="#">
                Skillset
              </a>
            </h6>
            <h6>
              <a className="nav-link text-white" href="#">
                Experience
              </a>
            </h6>
            <h6>
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </h6>
          </div>
        </div>
      </div>
    </nav>
  );
};
