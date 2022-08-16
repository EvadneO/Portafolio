import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Portafolio } from "../component/portafolio";

export const Portafo = () => {
  const { store, actions } = useContext(Context);

  return (
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
  );
};
