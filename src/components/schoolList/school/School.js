import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
// Components

// CSS
import './School.css';

// Helpers

class School extends Component {
  renderRatings(){
    var ratings = [];
    var rating = this.props.rating;

    for (var i = 0; i < rating; i++){
      ratings.push(<FontAwesome style={{color: '#f53b2e'}} name="star" />);
    }

    for (var j = 0; j < 5 - rating; j++){
      ratings.push(<FontAwesome style={{color: '#e6e6eb'}} name="star" />);
    }

    return ratings;
  }

  render(){
    var schoolName = this.props.schoolName;

    return(
      <div className="school">
        <div className="school-wrapper">
          <div className="school-name">{schoolName}</div>
          <div className="rating">{this.renderRatings()}</div>
        </div>
      </div>
    )
  }
}

export default School;