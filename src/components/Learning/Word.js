import React, { Component } from "react";
// import ContentContext from "../../contexts/ContentContext";
// import LearningService from '../../services/learning-service';
import LearningService from "../../services/learning-service";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
// import Result from "./Result";
// import config from "../../config";
// import TokenService from "../../services/token-service";
// import WordsToPracice from "../Dashboard/WordsToPractice";

class Word extends Component {
  // static contextType = ContentContext;

  // static defaultProps = {
  //   nextWord: "",
  //   wordCorrectCount: 0,
  //   wordIncorrectCount: 0,
  //   totalScore: 0
  // };
  constructor(props) {
    super(props);

    // this.state.currentWord = this.props.nextWord;
    // this.state.nextWord = this.props.nextWord;
    // this.state.wordCorrectCount = this.props.wordCorrectCount;
    // this.state.wordIncorrectCount = this.props.wordIncorrectCount;
    // this.state.totalScore = this.props.totalScore;
    this.state = {
      currentWord: "",
      isCorrect: null,
      wordCorrectCount: this.props.wordCorrectCount,
      wordIncorrectCount: this.props.wordIncorrectCount,
      totalScore: this.props.totalScore,
      nextWord: this.props.nextWord,
      currentGuess: "",
      answer: null
    };

    this.tempSpace = {
      wordCorrectCount: 0,
      wordIncorrectCount: 0
    }
  }


  handleInput = e => {
    e.preventDefault();
    this.setState({
      currentGuess: e.target.value
    });
  };




  postGuessHandler = e => {
    e.preventDefault();
    console.log('props is', this.props);
    const guess = this.state.currentGuess;

    LearningService.postGuess(guess).then(data => {
      console.log("data is post", data);
      // this.handleSetState(data);
      this.tempSpace.wordCorrectCount = data.wordCorrectCount;
      this.tempSpace.wordIncorrectCount = data.wordIncorrectCount;

      this.setState({
        isCorrect: data.isCorrect,
        totalScore: data.totalScore,
        nextWord: data.nextWord,
        answer: data.answer
      });

      if (this.state.isCorrect === true) {
        this.setState({
          wordCorrectCount: this.state.wordCorrectCount + 1,  // incremeting here for interface, but also incrementing on the server-side and saving to DB so that the updated score persists
        })
      } else {
        this.setState({
          wordIncorrectCount: this.state.wordIncorrectCount + 1,  // incremeting here for interface, but also incrementing on the server-side and saving to DB so that the updated score persists
        })
      }
    });
  };


  setNextWordOnClick = () => {
    //   LearningService.getWord()
    console.log('on second click, this.state.nextword is', this.state.nextWord);
    this.setState({
      isCorrect: null,
      wordCorrectCount: this.tempSpace.wordCorrectCount,
      wordIncorrectCount: this.tempSpace.wordIncorrectCount
    });

    console.log('this state is', this.state)
  }


  render() {
    console.log('uuuuugh', this.state.currentWord, this.state.nextWord);
    return (
      <section id="translate-page-container">
        <div className="learning_stats">
          <h4 className="learning_correct">
            You have answered this word correctly {this.state.wordCorrectCount}{" "}
            times.
          </h4>
          <h4 className="learning_incorrect">
            You have answered this word incorrectly{" "}
            {this.state.wordIncorrectCount} times.
          </h4>
        </div>
        <section className="DisplayScore">
          <p>Your total score is: {this.state.totalScore}</p>
        </section>

        {this.state.isCorrect === true && (
          <section id="correct-answer-feedback" className="DisplayFeedback">
            <h2>You were correct! :D</h2>
            <p>
              The correct translation for {this.state.currentWord} was{" "}
              {this.state.answer} and you chose {this.state.currentGuess}!
            </p>
          </section>
        )}
        {this.state.isCorrect === false && (
          <section id="incorrect-answer-feedback" className="DisplayFeedback">
            <h2>Good try, but not quite right :(</h2>
            <p>
              The correct translation for {this.state.currentWord} was{" "}
              {this.state.answer} and you chose {this.state.currentGuess}!
            </p>
          </section>
        )}

        {this.state.isCorrect === null && (
          <form id="translation-guess-form" onSubmit={(e) => {
            this.setState({
              currentWord: this.state.nextWord
            });
            return this.postGuessHandler(e);
          }}>
            <h2>Translate the word:</h2> <span>{this.state.nextWord}</span>
            <label htmlFor="learn-guess-input">
              <p>What's the translation for this word?</p>
            </label>
            <input
              type="text"
              name="guess"
              required
              onChange={this.handleInput.bind(this)}
              id="learn-guess-input"
            ></input>
            <Button id="button-show-form" type="submit" onClick={this.updateCounts}>
              Submit your answer
            </Button>
          </form>
        )}
        {this.state.isCorrect !== null && (
          <Button
            id="button-show-form"
            type="submit"
            onClick={this.setNextWordOnClick}
          >
            Try another word!
          </Button>
        )}

        <Link to="/" className="button-to-dashboard" type="submit">
          <div className="button-to-dashboard-text">Dashboard</div>
        </Link>
      </section>
    );
  }
}

export default Word;
