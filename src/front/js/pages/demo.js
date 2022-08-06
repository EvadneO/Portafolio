import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import tecno from "../../img/tecno.png";

export const Demo = () => {
  // const [mode, setMode] = useState(undefined);
  // const { store, actions } = useContext(Context);

  // const clickHandler = (nuevoModo) => {
  //   if (mode !== nuevoModo) {
  //     setMode(nuevoModo);
  //   } else {
  //     setMode(undefined);
  //   }
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title"> Mis Datos</h1>
                  <p className="card-text">
                    <strong>Nombre: </strong>
                  </p>
                  <p className="card-text">
                    <strong>Apellidos: </strong>
                  </p>
                  <p className="card-text">
                    <strong>Email: </strong>
                  </p>
                  <p className="card-text">
                    <strong>Dirección: </strong>
                  </p>
                  <p className="card-text">
                    <strong>Teléfono: </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={tecno}
              className="imagen"
              data-bs-toggle="collapse"
              href="#huella"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("crearMascota")}
            ></img>

            <h5 className="text-center">Añadir Mascotas</h5>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={tecno}
              className="imagen"
              data-bs-toggle="collapse"
              href="#mascota"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("mascotas")}
            ></img>

            <h5 className="text-center">Mis Mascotas</h5>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={tecno}
              className="imagen"
              data-bs-toggle="collapse"
              data-bs-target="#candidatos"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("candidatos")}
            ></img>

            <h5 className="text-center">Ver Candidatos</h5>
          </div>
          <div className="col-3 d-flex flex-column align-items-center">
            <img
              src={tecno}
              className="imagen"
              data-bs-toggle="collapse"
              data-bs-target="#postulaciones"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => clickHandler("postulaciones")}
            ></img>

            <h5 className="text-center">Mis Postulaciones</h5>
          </div>
          <div>
            <div className="card card-body">
              {mode === "crearMascota" ? (
                <Single />
              ) : mode === "mascotas" ? (
                <Single />
              ) : mode === "candidatos" ? (
                <Single />
              ) : mode === "postulaciones" ? (
                <Single />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      ) : (
      <div className="d-flex justify-content-center">
        <img src={iniciaSesion} style={{ width: "35em", height: "35em" }} />
      </div>
    </div>
  );
};
