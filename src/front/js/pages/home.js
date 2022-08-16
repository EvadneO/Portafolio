import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Portafolio } from "../component/portafolio";
import { Experiencia } from "../component/experiencia";
import { Contacto } from "../component/contact";
import { Tecnologia } from "../component/tecnologia";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [mode, setMode] = useState(undefined);

  const clickHandler = (nuevoModo) => {
    if (mode !== nuevoModo) {
      setMode(nuevoModo);
    } else {
      setMode(undefined);
    }
  };

  useEffect(() => {
    actions.getProyectos();
    actions.getExperience();
  }, []);

  return (
    <div className="fluid">
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <div className="navbar-brand">
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
                  onClick={() => clickHandler("portafolio")}
                >
                  Portafolio
                </a>
              </h6>
              <h6>
                <a
                  className="nav-link text-white"
                  onClick={() => clickHandler("tecnologia")}
                >
                  Tecnologías
                </a>
              </h6>
              <h6>
                <a
                  className="nav-link text-white"
                  onClick={() => clickHandler("experiencia")}
                >
                  Experiencia
                </a>
              </h6>
              <h6>
                <a
                  className="nav-link text-white"
                  onClick={() => clickHandler("contacto")}
                >
                  Contacto
                </a>
              </h6>
            </div>
          </div>
        </div>
      </nav>
      {/* Detalle de Portafolio */}
      {mode === "portafolio" ? (
        <div className="container">
          <div className="text-center">
            <h1
              className="display-4"
              style={{
                fontFamily: "Trebuchet MS",
                fontWeight: "extrabold",
              }}
            >
              Portafolio
            </h1>
            <div className="linea"></div>
          </div>

          <div className="row mt-5">
            {store.proyectos.map(function (objeto) {
              return <Portafolio objeto={objeto} />;
            })}
          </div>
        </div>
      ) : mode === "tecnologia" ? (
        <div className="text-center bg-info">
          <h1
            className="display-4"
            style={{
              fontFamily: "Trebuchet MS",
              fontWeight: "extrabold",
              color: "white",
            }}
          >
            Tecnologías
          </h1>
          <div className="lineas"></div>
          <div className="row">
            <div
              className="row"
              style={{
                margin: "auto",
                marginBottom: "8rem",
                marginTop: "3rem",
              }}
            >
              <Tecnologia />
            </div>
          </div>
        </div>
      ) : mode === "experiencia" ? (
        <div className="container">
          <div className="text-center">
            <h1
              className="display-4"
              style={{
                fontFamily: "Trebuchet MS",
                fontWeight: "extrabold",
              }}
            >
              Experiencia
            </h1>
            <div className="linea"></div>
          </div>

          <div className="row mt-5">
            {store.experience.map(function (objeto) {
              return <Experiencia objeto={objeto} />;
            })}
          </div>
        </div>
      ) : mode === "contacto" ? (
        <div className="text-center bg-info">
          <h1
            className="display-4"
            style={{
              fontFamily: "Trebuchet MS",
              fontWeight: "extrabold",
              color: "white",
            }}
          >
            Contact
          </h1>
          <div className="lineas"></div>
          <div className="row">
            <div
              className="col-6"
              style={{
                margin: "auto",
                marginBottom: "10rem",
                marginTop: "5rem",
              }}
            >
              <Contacto />
            </div>
          </div>
        </div>
      ) : (
        <div className="fluid">
          <div className="container">
            <div className="text-center">
              <h1
                className="display-4"
                style={{
                  fontFamily: "Trebuchet MS",
                  fontWeight: "extrabold",
                }}
              >
                Portafolio
              </h1>
              <div className="linea"></div>
            </div>

            <div className="row mt-5">
              {store.proyectos.map(function (objeto) {
                return <Portafolio objeto={objeto} />;
              })}
            </div>
          </div>
          <div className="text-center bg-info">
            <h1
              className="display-4"
              style={{
                fontFamily: "Trebuchet MS",
                fontWeight: "extrabold",
                color: "white",
              }}
            >
              Tecnologías
            </h1>
            <div className="lineas"></div>
            <div className="row">
              <div
                className="row"
                style={{
                  margin: "auto",
                  marginBottom: "8rem",
                  marginTop: "3rem",
                }}
              >
                <Tecnologia />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1
              className="display-4"
              style={{
                fontFamily: "Trebuchet MS",
                fontWeight: "extrabold",
              }}
            >
              Experience
            </h1>
            <div className="linea"></div>
          </div>
          <div className="row" style={{ margin: "auto" }}>
            {store.experience.map(function (objeto) {
              return <Experiencia objeto={objeto} />;
            })}
          </div>

          <div className="text-center bg-info">
            <h1
              className="display-4"
              style={{
                fontFamily: "Trebuchet MS",
                fontWeight: "extrabold",
                color: "white",
              }}
            >
              Contact
            </h1>
            <div className="lineas"></div>
            <div className="row">
              <div
                className="col-6"
                style={{
                  margin: "auto",
                  marginBottom: "10rem",
                  marginTop: "5rem",
                }}
              >
                <Contacto />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
