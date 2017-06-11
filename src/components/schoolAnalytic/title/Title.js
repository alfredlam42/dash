import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Components

// CSS
import './Title.css';

// Helpers

class Title extends Component {
  renderRating(){
    var ratings = [];
    var rating = Math.floor(Math.random() * 5);

    for (var i = 0; i < rating; i++){
      ratings.push(<FontAwesome key={i} style={{color: '#ffffff'}} name="star" />);
    }

    for (var j = 0; j < 5 - rating; j++){
      ratings.push(<FontAwesome key={(5 + j)} style={{color: '#ffffff'}} name="star-o" />);
    }

    return ratings;
  }

  render(){
    var schoolName = this.props.schoolName.replace(/-/g, ' ');
    var totalReviews = Math.floor(Math.random() * 500);

    return(
      <div className="title">
        <div>{schoolName}</div>
        <div>{this.renderRating()} ({totalReviews})</div>
      </div>
    )
  }
}

export default Title;