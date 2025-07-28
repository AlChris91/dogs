import { Link } from "react-router-dom";
import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";

const LoginForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://www.dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="./login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
