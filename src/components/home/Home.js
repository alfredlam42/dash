import React, { Component } from 'react';

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

  render(){
    return (
      <div className="home">
        <div className="home-wrapper">
          <div className="title">School Review</div>
          <form>
            <div className="location">
              I live in
              <select>
                <option value="defaultCity">Select a city</option>
                {this.renderCityOptions()};
              </select>
            </div>
            <button className="view-school-button">View Schools</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;