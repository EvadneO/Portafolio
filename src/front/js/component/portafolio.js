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
      {/* ) : ( */}
      <div
        className="card"
        id="htmlContent"
        style={{
          width: "55rem",
          margin: "auto",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <h3
          className="text-center"
          style={{ color: "green", marginTop: "1rem", marginBottom: "1rem" }}
        >
          <stron>{props.objeto.name}</stron>
        </h3>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={props.objeto.img} className="d-block w-100" alt="..." />
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
          ></button>
        </div>
        <div className="card-body">
          <p className="card-text">
            <h5>
              <strong>Finalidad</strong>
            </h5>
            {props.objeto.purpose}
          </p>
          <p className="card-text">
            <h5>
              <strong>Tecnologías</strong>
            </h5>
            {props.objeto.technology}
          </p>
          <div className="text-center">
            <a href={props.objeto.link} className="fas fa-directions"></a>
          </div>
        </div>
        {/* )}
        </a> */}
      </div>
    </>
  );
};
