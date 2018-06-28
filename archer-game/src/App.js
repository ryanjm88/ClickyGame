import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container.js";
import characters from "./characters.json";
import Column from "./Column";
import Row from "./Row";
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
    console.log(this.state.characters)
    return (
      <Wrapper>
        <Nav
          title="Archer Character Click Game"
          score={this.state.startScore}
          topScore={this.state.topScore}
          answered={this.state.answered}
        />

        <Title>
          Try to click all eight characters without clicking the
          same one twice!
        </Title>

        <Container>
          <Row>
            {this.state.characters.map(character => (
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  image={character.image}
                />
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
