import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

import { Navbar } from "../../components/Navbar";

class Game extends Component {
  state = {
    questions: [],
    currentQuestion: 0,
    points: 0,
    user: {},
    message: "",
    clicked: false,
    lifes: 3,
    lengthOfQuestions: 2
  };

  async componentDidMount(){
    try {
      const responseQuestions = await api.get("/api/v1/questions");
      const responseUser = await api.get("/api/v1/users/whoami");
      this.setState({
        questions:
            responseQuestions.data,
        user:
            responseUser.data
      }); 
      for (let i = 0; i < this.state.questions.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.questions[i], this.state.questions[j]] = [this.state.questions[j], this.state.questions[i]];
       }
    } catch (err) {
      this.setState({
        error:
          "Houve um problema com a conexão. Tente novamente."
      });
    }
  }

  async updatePoints() {
    await this.timeout(1500);
    this.verifyLifesOfPlayer();
    if(this.state.points !== 0) {
        let updatedPoints = this.state.user.points + this.state.points
        if (this.state.points === 10) {
          updatedPoints =+ 5
        }
        await api.patch(`/api/v1/users/id/${this.state.user.id}`, {
            points: updatedPoints
        });
    }
    this.props.history.push("/app");
  }

  async verifyLifesOfPlayer() {
    if (this.state.lifes === 0) {
      // TODO abrir modal informando game over
      this.props.history.push("/app");
    }
  }

  handleAnswer = async (isCorrect)  => {
    if (this.state.currentQuestion === this.state.lengthOfQuestions) {
        if(isCorrect) {
            this.setState({
                points: this.state.points + 1,
                message: "Alternativa correta!",
                clicked: true
            }, this.updatePoints)
        } else {
            this.setState({
                points: this.state.points,
                message: "Alternativa incorreta!",
                clicked: true,
                lifes: this.state.lifes - 1
            }, this.updatePoints)
        }
    } else {
        if(isCorrect) {
            this.setState({
                points: this.state.points + 1,
                message: "Alternativa correta!",
                clicked: true
            })
        } else {
            this.setState({
              message: "Alternativa incorreta!",
              clicked: true,
              lifes: this.state.lifes - 1
            })
        }
        await this.timeout(1500);
        this.verifyLifesOfPlayer();
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
          message: "",
          clicked: false
      })
    }
  };

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  render() {
    let Card;
    let arrayAlternatives = [
      <p className="answer" onClick={() => {this.state.clicked ? console.log('') : this.handleAnswer(true)}}>{this.state.questions[this.state.currentQuestion]?.correct_answer}</p>,
      <p className="answer" onClick={() => {this.state.clicked ? console.log('') : this.handleAnswer(false)}}>{this.state.questions[this.state.currentQuestion]?.alternative1}</p>,
      <p className="answer" onClick={() => {this.state.clicked ? console.log('') : this.handleAnswer(false)}}>{this.state.questions[this.state.currentQuestion]?.alternative2}</p>,
      <p className="answer" onClick={() => {this.state.clicked ? console.log('') : this.handleAnswer(false)}}>{this.state.questions[this.state.currentQuestion]?.alternative3}</p>,
    ]

    for (let i = 0; i < arrayAlternatives.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayAlternatives[i], arrayAlternatives[j]] = [arrayAlternatives[j], arrayAlternatives[i]];
    }

    if (this.state.questions.length === 0) {
        Card = <></>;
    } else {
        Card = 
        <div className="card">
            <p className="question">{this.state.questions[this.state.currentQuestion]?.question}</p>
            <p>{this.state.message}</p>
            {arrayAlternatives.map(alternative => {
              return alternative
            })}
        </div>
    }

    return (
      <>
      <Navbar />
        <Container>
            <h3>Vidas: {this.state.lifes}</h3>
            {Card}
        </Container>
      </>
    );
  }
}

export default withRouter(Game);