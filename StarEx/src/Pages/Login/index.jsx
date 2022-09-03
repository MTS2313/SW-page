import axios from "axios";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHref } from "react-router-dom";
import "./style.css";
function Login() {
  function authpost(i) {
    i.preventDefault();
    axios
      .post("http://localhost:4000/users/authenticate", {
        username: i.target.username.value,
        password: i.target.password.value,
      })
      .then((i) => {
        localStorage.setItem("token", i.data.token);
        verifyAuth();
      });
  }
  function verifyAuth() {
    var config = {
      method: "get",
      url: "http://localhost:4000/users/verifyToken",
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios(config)
      .then(function (response) {
        if (response.data.valid) {
          window.location.href = "http://localhost:3000/"
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="Login">
      <form className="FormStyle" onSubmit={authpost}>
        <InputGroup>
          <InputGroup.Text>Name</InputGroup.Text>
          <Form.Control
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
            name="username"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Senha</InputGroup.Text>
          <Form.Control
            placeholder="Senha"
            aria-label="Senha"
            aria-describedby="basic-addon1"
            name="password"
          />
        </InputGroup>
        <Button type="submit" variant="primary">
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default Login;
