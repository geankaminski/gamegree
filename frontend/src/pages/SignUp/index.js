import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.png";

import { Form, Container } from "./styles";

import api from "../../services/api";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password, confirm_password, first_name, last_name } = this.state;
    if (!username || !email || !password || !confirm_password || !first_name || !last_name) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/api/v1/users", { username, email, password, first_name, last_name, confirm_password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
        <img style={{ width: "100%" }} src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome"
            onChange={e => this.setState({ first_name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Sobrenome"
            onChange={e => this.setState({ last_name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirma a senha"
            onChange={e => this.setState({ confirm_password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);