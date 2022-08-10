import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Experiencia = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getExperience();
  }, []);

  return (
    <div
      className="col-md-3 bg-dark"
      style={{ margin: "auto", marginTop: "2rem", marginBottom: "4rem" }}
    >
      <div className="card bg-info" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5>{props.objeto.name}</h5>
          <h6>{props.objeto.country}</h6>
          <h6>{props.objeto.date}</h6>
          <p className="card-text">
            <h5>Función</h5>
            {props.objeto.function}
          </p>
        </div>
      </div>
    </div>
  );
};
