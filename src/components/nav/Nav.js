import React, { Component } from 'react';
import { Link } from 'react-router';

// Components

// CSS
import './Nav.css';

// Helpers

// Images
var school = require('../../assets/img/school.png');
var review = require('../../assets/img/edit.png');
var community = require('../../assets/img/community.png');
var report = require('../../assets/img/report.png');
var settings = require('../../assets/img/settings.png');

class Nav extends Component {
  render(){
    return(
      <div className="navigation">
        <div className="navigation-wrapper">
          <Link to="/schools"><div className="link">
            <img src={school} alt="schools icon" />
            School
          </div></Link>
          <Link to="/schools/review"><div className="link">
            <img src={review} alt="review icon" />
            Review
          </div></Link>
          <Link to="/community"><div className="link">
            <img src={community} alt="community icon" />
            Community
          </div></Link>
          <Link to="/reports"><div className="link">
            <img src={report} alt="reports icon" />
            Report
          </div></Link>
          <Link to="settings"><div className="link">
            <img src={settings} alt="setting icon" />
            Setting
          </div></Link>
        </div>
      </div>
    )
  }
}

export default Nav;