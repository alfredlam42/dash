import React, { Component } from 'react';
import { Link } from 'react-router';

// Components
import ToolBar from './toolBar/ToolBar';
import School from './school/School';

// CSS
import './SchoolList.css';

// Helpers
import getSchools from '../../assets/js/getSchools';

// Images

class SchoolList extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: 'default',
      schools: [],
    }

    this._onCityChange = this._onCityChange.bind(this);
  }

  componentWillMount(){
    var city = localStorage.getItem('city');
    var schools = getSchools(city);

    this.setState({city: city, schools: schools});
  }

  renderSchools(){
    var schools = this.state.schools;
    var rating = Math.floor(Math.random() * 5);

    return schools.map(function(school, index){
      var schoolLink = school.replace(/\s/g, '-')

      return <Link key={index} to={`/schools/analytics/${schoolLink}`}><School schoolName={school} rating={rating} /></Link>
    })
  }

  _onCityChange(event){
    var city = event.target.value;
    var schools = getSchools(city);

    this.setState({city: city, schools: schools});
  }

  render(){
    var city = this.state.city;

    return(
      <div className="school-list">
        <div className="school-list-wrapper">
          <div className="title">Schools</div>
          <ToolBar city={city} onCityChange={this._onCityChange}/>
          <div className="list">
            {this.renderSchools()}
          </div>
        </div>
      </div>
    )
  }
}

export default SchoolList;