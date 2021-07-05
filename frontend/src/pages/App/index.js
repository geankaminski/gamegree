import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import api from "../../services/api";
import { logout } from "../../services/auth";
 
import { Container, Navbar, Button } from "./styles";

// Backend
  // **** Proteger a rota de atualização de pontuação *****
  // **** Proteger as informações recebidas via GET *****
  // Perguntas enviadas baseadas no level do jogador
  // Incrementar level do jogador conforme sua pontuação
  // Incrementar tipo da pergunta no banco (jogos clássicos, recentes, etc...)
  // Retornar posição do jogador
  // Incrementar blog na plataforma
// Front
  // Admin não pode jogar?
  // Ajustes gerais
class App extends Component {
  state = {
    error: "",
    questions: [],
    user: {},
    ranking: []
  };

  async componentDidMount(){
    try {
      const responseUser = await api.get("/api/v1/users/whoami");
      const responseQuestions = await api.get("/api/v1/questions");
      const responseRanking = await api.get("/api/v1/users/ranking");
      this.setState({
        user:
          responseUser.data,
        questions:
          responseQuestions.data,
        ranking: 
          responseRanking.data
      }); 
      console.log(this.state)
    } catch (err) {
      this.setState({
        error:
          "Houve um problema com o login, verifique suas credenciais."
      });
    }
  }

  handleLogout = async e => {
    logout();
  }

  handleAdmin = async e => {
    this.props.history.push("/admin");
  }

  render() {
    let AdminButton;

    if (this.state.user.role === 'Admin') {
      AdminButton = <button onClick={this.handleAdmin}>Painel Admin</button>;
    } else {
      AdminButton = <></>;
    }

    return (
      <>

        <Navbar>
          <h1>Gamegree</h1>
          {AdminButton}
          <form onSubmit={this.handleLogout}>
            {this.state.error && <p>{this.state.error}</p>}
            <Button type="submit" >Sair</Button>
          </form>
        </Navbar>

      <Container>
      
        <div className="play-card">
          <Link to="/game">Jogar!</Link>
        </div>

        <div className="ranking">
          <div className="points"> {this.state.user.points} Pontos, Nível {this.state.user.level}</div>
          <h3 >Top 5 jogadores</h3>
          <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Posição</TableCell>
              <TableCell>Usuário</TableCell>
              <TableCell>Pontos</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              <TableCell>1º</TableCell>
              <TableCell>{this.state.ranking[0]?.first_name}</TableCell>
              <TableCell>{this.state.ranking[0]?.points}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2º</TableCell>
              <TableCell>{this.state.ranking[1]?.first_name}</TableCell>
              <TableCell>{this.state.ranking[1]?.points}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3º</TableCell>
              <TableCell>{this.state.ranking[2]?.first_name}</TableCell>
              <TableCell>{this.state.ranking[2]?.points}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4º</TableCell>
              <TableCell>{this.state.ranking[3]?.first_name}</TableCell>
              <TableCell>{this.state.ranking[3]?.points}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5º</TableCell>
              <TableCell>{this.state.ranking[4]?.first_name}</TableCell>
              <TableCell>{this.state.ranking[4]?.points}</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </div>
        
        </Container>
      </>
    );
  }
}

export default withRouter(App);