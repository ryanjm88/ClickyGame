import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import characters from "./characters.json";
import Column from "./Column";
import Row from "./Row";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    characters,
    startScore: 0,
    topScore: 0,
    answered: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1)  {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
    else  {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.startScore + 1;
    this.setState({
      startScore: newScore,
      answered: ""
    });
    if (newScore >= this.state.topScore)  {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 8)  {
      this.setState({ answered: "It's a win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      startScore: 0,
      topScore: this.state.topScore,
      answered: "Oops!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffleChars = this.shuffleChars(characters);
    this.setState({ characters: shuffleChars });
  };

  shuffleChars = (array) =>  {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Archer Character Click Game"
          score={this.state.startScore}
          topScore={this.state.topScore}
          answered={this.state.answered}
        />

        <Title>
          Try to click each character once, without clicking on
          any character twice before clicking all eight. Good luck!
        </Title>

        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Column size="md-3 sm-6">
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={character.id}
                  image={character.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
