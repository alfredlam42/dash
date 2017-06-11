import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Components

// CSS
import './ToolBar.css';

// Helpers

class Toolbar extends Component {
  render(){
    return(
      <div className="tool-bar">
        <div className="tool-bar-wrapper">
          <div className="filter"><FontAwesome name="filter" /></div>
          <div className="city">
            <select>
              <option value="Tripoli, Lebanon">Tripoli, Lebanon</option>
              <option value="Akkar, Lebanon">Akkar, Lebanon</option>
              <option value="Bekaa Valley, Lebanon">Bekaa Valley, Lebanon</option>
              <option value="Mount Lebanon, Lebanon">Mount Lebanon, Lebanon</option>
              <option value="Beirut, Lebanon">Beirut, Lebanon</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Toolbar;