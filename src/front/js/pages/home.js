import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Portafolio } from "../component/portafolio";
import { Experiencia } from "../component/experiencia";
import { Contacto } from "../component/contact";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getProyectos();
    actions.getExperience();
  }, []);

  return (
    <div className="fluid">
      {/* Detalle de Portafolio */}
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
      {/* Detalle de Tecnologías */}
      <div className="text-center bg-info">
        <h1
          className="display-4"
          style={{
            fontFamily: "Trebuchet MS",
            fontWeight: "extrabold",
            color: "white",
          }}
        >
          Skillset
        </h1>
        <div className="lineas"></div>
        <div
          className="row bg-info"
          style={{ margin: "3rem", padding: "1rem" }}
        >
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
          <div className="col-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              style={{ width: "8rem", marginTop: "25px" }}
            ></img>
          </div>
        </div>
      </div>
      {/* Detalle de Experiencias */}
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
      {/* Detalle de Contactar*/}
      <div className="text-center bg-info" style={{}}>
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
            style={{ margin: "auto", marginBottom: "10rem", marginTop: "5rem" }}
          >
            <Contacto />
          </div>
        </div>
      </div>
    </div>
  );
};
