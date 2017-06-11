import React, { Component } from 'react';
import { Link } from 'react-router';

// Components

// CSS
import './Home.css';

// Helpers
import getCities from '../../assets/js/getCities';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      cities: []
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

  _onChange(event){
    var city = event.target.value;

    localStorage.setItem("city", city);
  }

  _onSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <div className="home">
        <div className="home-wrapper">
          <div className="title">School Review</div>
          <form onSubmit={this._onSubmit}>
            <div className="location">
              I live in
              <select onChange={this._onChange}>
                <option value="defaultCity">Select a city</option>
                {this.renderCityOptions()};
              </select>
            </div>
            <Link to="/schools"><button className="view-school-button">View Schools</button></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;