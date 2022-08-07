import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Single } from "../pages/single";
import eva from "../../img/eva.jpeg";
import { Demo } from "../pages/demo";
import { Link } from "react-router-dom";

export const Portafolio = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="container">
        <a
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <img
              src="https://www.eltiempo.com/files/image_640_428/uploads/2019/12/07/5dec47012d257.jpeg"
              className="card-img-top"
              style={{ width: "18rem", margin: "auto" }}
              alt="..."
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            />
          ) : (
            <div
              className="card"
              id="htmlContent"
              style={{ width: "18rem", margin: "auto" }}
            >
              <h4 className="text-center">Proyecto</h4>
              <img
                src="https://www.eltiempo.com/files/image_640_428/uploads/2019/12/07/5dec47012d257.jpeg"
                typeof="submit"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="fas fa-share"></a>
                <p className="card-text">
                  Que es el proyecto, tecnologías usadas.
                </p>
              </div>
            </div>
          )}
        </a>
      </div>
    </>
  );
};
