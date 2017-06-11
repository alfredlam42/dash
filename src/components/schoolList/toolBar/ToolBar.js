import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Components

// CSS
import './ToolBar.css';

// Helpers
import getCities from '../../../assets/js/getCities';

// Images
var edit = require('../../../assets/img/edit.png');
var sort = require('../../../assets/img/sort.png');

class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      cities: [],
    }
  }

  componentWillMount(){
    var cities = getCities();

    this.setState({cities: cities});
  }

  renderCityOptions(){
    var cities = this.state.cities;

    return cities.map(function(city){
      return <option key={city} value={city}>{city}</option>;
    })
  }

  render(){
    return(
      <div className="tool-bar">
        <div className="tool-bar-wrapper">
          <div className="city">
            <select>
              <option value="default">Select a city...</option>
              {this.renderCityOptions()}
            </select>
          </div>
          <div className="write-review"><img src={edit} alt="write a review" /></div>
          <div className="filter"><img src={sort} alt="filter or sort results" /></div>
        </div>
      </div>
    )
  }
}

export default Toolbar;