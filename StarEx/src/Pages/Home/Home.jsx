import React from "react";
import People from "../Sections/People";
import StarShips from "../Sections/StarShips";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home() {
  let tokenAc = localStorage.getItem("token");
  return (
    <div className="Home">
      <header>
        {!tokenAc ? (
          <Link className="LoginBtn" to="Login">
            <Button>Login</Button>
          </Link>
        ) : null}
      </header>
      <h2 className="ListName">Lista de Personagens</h2>
      <People />
      <h2 className="ListName">Lista de Naves</h2>
      <StarShips />
    </div>
  );
}

export default Home;
