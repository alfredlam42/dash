import React, { Component } from 'react';
import { Link } from 'react-router';
import { RadioGroup, Radio, FormField, Checkbox } from 'react-mdc-web';

// Components
import RatingQuestion from './ratingQuestion/RatingQuestion';

// CSS
import './ReviewPage.css';

// Helpers
import getCities from '../../assets/js/getCities';
import getSchools from '../../assets/js/getSchools';

class ReviewPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      cities: [],
      schools: [],
      selectedCity: null,
      selectedSchool: null,
    }

    this._onCityChange = this._onCityChange.bind(this);
    this._onSchoolChange = this._onSchoolChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
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

  renderSchoolOptions(){
    var schools = this.state.schools;

    return schools.map(function(school){
      return <option key={school} value={school}>{school}</option>;
    })
  }

  _onCityChange(event){
    var selectedCity = event.target.value;
    var schools = getSchools(selectedCity);

    this.setState({selectedCity: selectedCity, schools: schools});
  }

  _onSchoolChange(event){
    var selectedSchool = event.target.value;

    this.setState({selectedSchool: selectedSchool});
  }

  _onSubmit(event){
    event.preventDefault();
  }


  render(){
    return(
      <div className="review-page">
        <div className="review-page-wrapper">
          <div className="title">Review School</div>
          <form onSubmit={this._onSubmit}>
            <div className="city-select">
              <div className="text">I got to school in</div>
              <select onChange={this._onCityChange}>
                <option value="defaultCity">Select A City</option>
                {this.renderCityOptions()}
              </select>
              <div className="text">at</div>
              <select onChange={this._onSchoolChange}>
                <option value="defaultSchool">Select A School</option>
                {this.renderSchoolOptions()}
              </select>
            </div>
            <div className="checkbox-section">
              <RadioGroup
                name="person-type"
              >
                <Radio value="female">I am a female student</Radio>
                <Radio value="male">I am a male student</Radio>
              </RadioGroup>
              <FormField id="labeled-checkbox">
                <div>
                  <Checkbox />
                  <label>I am the parent of a female student</label>
                </div>
                <div>
                  <Checkbox />
                  <label>I am the parent of a male student</label>
                </div>
              </FormField>
            </div>
            <div className="ratings-section">
              <div className="title">Please rate your school based upon the following criteria:</div>
              <div className="question">Bullying often affects.</div>
              <RatingQuestion questionName="q1" />
              <div className="question">Sexual harassment often affects me.</div>
              <RatingQuestion questionName="q2" />
              <div className="question">I have access to sanitation facilities at school.</div>
              <RatingQuestion questionName="q3" />
              <div className="question">There is enough space for everyone in my classroom.</div>
              <RatingQuestion questionName="q4" />
              <div className="question">I encounter language barriers during class.</div>
              <RatingQuestion questionName="q5" />
              <div className="question">My enrollment at this school was handled fairly.</div>
              <RatingQuestion questionName="q6" />
            </div>
            <div className="additional-comments">
              <div className="comment-title">Comments:</div>
              <div className="comment-input"><textarea name="comments" /></div>
            </div>
              <Link to="/schools"><button>Submit</button></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewPage;