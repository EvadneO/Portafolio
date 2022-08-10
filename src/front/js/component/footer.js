import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center bg-info">
    <div className="col">
      <a href="https://github.com/EvadneO">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          className="rounded-circle"
          style={{ width: "3rem", marginBottom: "3rem" }}
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/evadneolivo/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          className="rounded-circle"
          style={{ width: "3rem", marginBottom: "3rem" }}
        ></img>
      </a>
    </div>
  </footer>
);
