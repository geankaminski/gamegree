import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Form, Container } from "./styles";

import api from "../../services/api";

import { Navbar } from "../../components/Navbar"

class Admin extends Component {
  state = {
    question: "",
    correct_answer: "",
    alternative1: "",
    alternative2: "",
    alternative3: "",
    errorQuestion: "",
    errorUser: "",
    username: "",
    foundUser: {},
    level: 1
  };

  handleQuestion = async e => {
    e.preventDefault();
    this.setState({
      errorQuestion: ""
    })
    const { question, level, correct_answer, alternative1, alternative2, alternative3 } = this.state;
    if (!question || !correct_answer || !alternative1 || !alternative2 || !alternative3) {
      this.setState({ errorQuestion: "Preencha todos os dados para cadastrar a pergunta!" });
    } else {
      try {
        console.log(level)
        await api.post("/api/v1/questions", { question, level, correct_answer, alternative1, alternative2, alternative3 });
        this.props.history.push("/app");
      } catch (err) {
        console.log(err);
        this.setState({ errorQuestion: "Ocorreu um erro ao registrar sua pergunta." });
      }
    }
  };

  handleSearchUser = async e => {
    e.preventDefault();
    console.log('aqui')
    this.setState({
      errorUser: ""
    })
    try {
      const userFound = await api.get(`/api/v1/users/username/${this.state.username}`);
      this.setState({
        foundUser: userFound.data
      })
    } catch (err) {
      this.setState({ errorUser: "Nenhum usuário encontrado com o termo procurado." });
    }
  }

  deleteUser() {
    console.log(this.state.foundUser.id)
  }

  render() {
    return (
      <>
      <Navbar />
      <Container>
        <Form onSubmit={this.handleQuestion}>
          {this.state.errorQuestion && <p>{this.state.errorQuestion}</p>}
          <h4>Cadastro de novas perguntas</h4>
          <input
            type="text"
            placeholder="Pergunta"
            onChange={e => this.setState({ question: e.target.value })}
          />
          <input
            type="text"
            placeholder="Alternativa Correta"
            onChange={e => this.setState({ correct_answer: e.target.value })}
          />
          <input
            type="text"
            placeholder="Alternativa incorreta 1"
            onChange={e => this.setState({ alternative1: e.target.value })}
          />
          <input
            type="text"
            placeholder="Alternativa incorreta 2"
            onChange={e => this.setState({ alternative2: e.target.value })}
          />
          <input
            type="text"
            placeholder="Alternativa incorreta 3"
            onChange={e => this.setState({ alternative3: e.target.value })}
          />
          <label htmlFor="select-level">Nível da pergunta</label>
          <select id="select-level" onChange={e => this.setState({ level: e.target.value })} value={this.state.level} >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
          </select>
         {/*  <label htmlFor="select-type">Tipo da pergunta</label>
          <select id="select-type" >
              <option value={1}>Compressão</option>
              <option value={2}>Equalização</option>
              <option value={3}>Dinâmica</option>
          </select> */}
          <button type="submit">Enviar nova questão</button>
        </Form>

        <Form onSubmit={this.handleSearchUser}>
          {this.state.errorUser && <p>{this.state.errorUser}</p>}
          <h4>Pesquisa por usuário</h4>
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <button type="submit">Procurar usuário</button>
          {this.state.foundUser.first_name && <span className="span-user">{this.state.foundUser.first_name} - <div className="button-delete" onClick={() => {this.deleteUser()}}>Deletar</div></span>}
        </Form>
      </Container>
      </>
    );
  }
}

export default withRouter(Admin);