import React, { Component } from 'react';
import { Link } from 'react-router';

// Components

// CSS
import './ToolBar.css';

// Helpers
import getCities from '../../../assets/js/getCities';

// Images
var review = require('../../../assets/img/edit.png');
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
    var city = this.props.city;

    return(
      <div className="tool-bar">
        <div className="tool-bar-wrapper">
          <div className="city">
            <select onChange={this.props.onCityChange} value={city}>
              <option value="default">Select a city...</option>
              {this.renderCityOptions()}
            </select>
          </div>
          <div className="write-review"><Link to="/schools/review"><img src={review} alt="write a review" /></Link></div>
          <div className="filter"><img src={sort} alt="filter or sort results" /></div>
        </div>
      </div>
    )
  }
}

export default Toolbar;