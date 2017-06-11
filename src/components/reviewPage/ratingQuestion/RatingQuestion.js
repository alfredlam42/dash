import React, { Component } from 'react';

// Components

// CSS
import './RatingQuestion.css';

// Helpers

class RatingQuestion extends Component {
  render(){
    var questionName = this.props.questionName;

    return(
      <div className="rating-question">
        <div className="option">
          <div className="radio-button"><input type="radio" name={questionName} value="1" /></div>
          <div className="radio-value">Strongly Disagree</div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" name={questionName} value="2" /></div>
          <div className="radio-value">Disagree</div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" name={questionName} value="3" /></div>
          <div className="radio-value">Neutral</div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" name={questionName} value="4" /></div>
          <div className="radio-value">Agree</div>
        </div>
        <div className="option">
          <div className="radio-button"><input type="radio" name={questionName} value="5" /></div>
          <div className="radio-value">Strongly Agree</div>
        </div>
      </div>
    )
  }
}

export default RatingQuestion;