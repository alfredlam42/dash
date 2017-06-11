import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Components

// CSS
import './Nav.css';

// Helpers

// Images
var school = require('../../assets/img/school.png');
var review = require('../../assets/img/review.png');
var report = require('../../assets/img/report.png');
var settings = require('../../assets/img/settings.png');

class Nav extends Component {
  render(){
    return(
      <div className="navigation">
        <div className="navigation-wrapper">
          <div className="link">
            <img src={school} alt="schools icon" />
            School
          </div>
          <div className="link">
            <img src={review} alt="review icon" />
            Review
          </div>
          <div className="link">
            <img src={report} alt="reports icon" />
            Report
          </div>
          <div className="link">
            <img src={settings} alt="setting icon" />
            Setting
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;