import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Portafolio = (props) => {
  const [show, setShow] = useState(true);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProyectos();
  }, []);

  return (
    <>
      <div
        className="col-md-5"
        style={{ marginTop: "2rem", marginBottom: "4rem" }}
      >
        <a
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={props.objeto.img}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={props.objeto.img2}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={props.objeto.img3}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <div
              className="card"
              id="htmlContent"
              style={{ width: "18rem", margin: "auto" }}
            >
              <h4 className="text-center">
                <stron>{props.objeto.name}</stron>
              </h4>
              <div className="card-body">
                <p className="card-text">
                  <h5>Finalidad</h5>
                  {props.objeto.purpose}
                </p>
                <p className="card-text">
                  <h5>Tecnologías</h5>
                  {props.objeto.technology}
                </p>
                <a href={props.objeto.link} className="fas fa-share">
                  ver aquí
                </a>
              </div>
            </div>
          )}
        </a>
      </div>
    </>
  );
};
