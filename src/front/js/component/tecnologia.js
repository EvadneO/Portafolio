import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Tecnologia = () => {
  return (
    <div className="row bg-info" style={{ margin: "3rem", padding: "1rem" }}>
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
  );
};
