import React, { Component } from 'react';

// Components

// CSS
import './RatingQuestion.css';

// Helpers

class RatingQuestion extends Component {
  constructor(props){
    super(props);

    this._onAnswerChange = this._onAnswerChange.bind(this);
  }

  _onAnswerChange(event){
    var answer = event.target.value;
    var questionName = this.props.questionName;

    this.props.onQuestionChange(questionName, answer);
  }

  render(){
    var questionName = this.props.questionName;

    return(
      <div className="rating-question">
        <div className="option">
          <div className="radio-button"><input type="radio" onChange={this._onAnswerChange} name={questionName} value="1" /></div>
          <div className="radio-value">Strongly Disagree</div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" onChange={this._onAnswerChange} name={questionName} value="2" /></div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" onChange={this._onAnswerChange} name={questionName} value="3" /></div>
          <div className="radio-value">Neutral</div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" onChange={this._onAnswerChange} name={questionName} value="4" /></div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" onChange={this._onAnswerChange} name={questionName} value="5" /></div>
          <div className="radio-value">Strongly Agree</div>
        </div>
      </div>
    )
  }
}

export default RatingQuestion;