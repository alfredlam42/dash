import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Components

// CSS
import './Nav.css';

// Helpers

class Nav extends Component {
  render(){
    return(
      <div className="navigation">
        <div className="navigation-wrapper">
          <div className="link"><FontAwesome name="home" /></div>
          <div className="link"><FontAwesome name="star" /></div>
          <div className="link"><FontAwesome name="files-o" /></div>
          <div className="link"><FontAwesome name="cog" /></div>
        </div>
      </div>
    )
  }
}

export default Nav;