import React, { useContext } from "react";
import { Context } from "../store/appContext";
import emailjs from "@emailjs/browser";

export const Contacto = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eunlgtd",
        "template_k4r4v3p",
        e.target,
        "7mmIhv5U2jO59TOvV"
      )
      .then((res) => {
        alert("Email enviado exitosamente.");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container-fluid bg-info">
      <form onSubmit={sendEmail}>
        <div className="mb-6 ">
          <label
            className="display-6"
            style={{
              fontFamily: "Trebuchet MS",
              color: "white",
              marginTop: "3rem",
            }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nombre@example.com"
            name="user_email"
          />
        </div>
        <div className="mb-6">
          <label
            className="display-6"
            style={{
              fontFamily: "Trebuchet MS",
              color: "white",
              marginTop: "3rem",
            }}
          >
            Mensaje
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            name="message"
          ></textarea>
        </div>
        <button
          type="Submit"
          className="btn btn-dark outline-info btn-lg"
          style={{ marginTop: "3rem" }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
