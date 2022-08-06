import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {/* Detalle de Portafolio */}
      <div className="title">
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
      {/* Detalle de Tecnologías */}
      <div className="title bg-info">
        <h1
          className="display-4"
          style={{
            fontFamily: "Trebuchet MS",
            fontWeight: "extrabold",
          }}
        >
          Skillset
        </h1>
        <div className="linea"></div>
      </div>
      {/* Detalle de Experiencias */}
      <div className="title">
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
      {/* Detalle de Contactar*/}
      <div className="title bg-info" style={{}}>
        <h1
          className="display-4"
          style={{
            fontFamily: "Trebuchet MS",
            fontWeight: "extrabold",
          }}
        >
          Contact
        </h1>
        <div className="linea"></div>
      </div>
    </div>
  );
};
