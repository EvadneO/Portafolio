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
        className="col-md-3"
        style={{ marginTop: "2rem", marginBottom: "4rem" }}
      >
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
              <h4 className="text-center">
                <stron>{props.objeto.name}</stron>
              </h4>
              <img
                src="https://www.eltiempo.com/files/image_640_428/uploads/2019/12/07/5dec47012d257.jpeg"
                typeof="submit"
                className="card-img-top"
                alt="..."
              />
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
