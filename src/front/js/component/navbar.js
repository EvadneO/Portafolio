import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import eva from "../../img/eva.jpeg";

export const Navbar = () => {
  return (
    <div className="float">
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
                style={{ width: "130rem" }}
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
      </nav>
    </div>
  );
};
