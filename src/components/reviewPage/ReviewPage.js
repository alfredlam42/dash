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
      formData: {
        selectedCity: null,
        selectedSchool: null,
        gender: null,
        femaleParent: false,
        maleParent: false,
        bullying: 0,
        sexualHarassment: 0,
        sanitation: 0,
        classSize: 0,
        languageBarrier: 0,
        enrollment: 0
      }
    }

    this._onCityChange = this._onCityChange.bind(this);
    this._onSchoolChange = this._onSchoolChange.bind(this);
    this._onGenderChange = this._onGenderChange.bind(this);
    this._onParentSelect = this._onParentSelect.bind(this);
    this._onQuestionChange = this._onQuestionChange.bind(this);
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
    var formData = this.state.formData;
    formData.selectedCity = selectedCity;

    this.setState({formData: formData, schools: schools});
  }

  _onSchoolChange(event){
    var selectedSchool = event.target.value;
    var formData = this.state.formData;
    formData.selectedSchool = selectedSchool;

    this.setState({formData: formData});
  }

  _onGenderChange(event){
    var gender = event.target.value;
    var formData = this.state.formData;
    formData.gender = gender;

    this.setState({formData: formData});
  }

  _onParentSelect(gender){
    var formData = this.state.formData;
    formData[gender] = !formData[gender];

    this.setState({formData: formData});
  }

  _onQuestionChange(questionName, answer){
    var formData = this.state.formData;
    formData[questionName] = parseInt(answer, 10);

    this.setState({formData: formData}, () => {console.log(this.state)});
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
                onChange={this._onGenderChange}
              >
                <Radio value="female">I am a female student</Radio>
                <Radio value="male">I am a male student</Radio>
              </RadioGroup>
              <FormField id="labeled-checkbox">
                <div>
                  <Checkbox onChange={() => {this._onParentSelect('femaleParent')}}/>
                  <label>I am the parent of a female student</label>
                </div>
                <div>
                  <Checkbox onChange={() => {this._onParentSelect('maleParent')}}/>
                  <label>I am the parent of a male student</label>
                </div>
              </FormField>
            </div>
            <div className="ratings-section">
              <div className="title">Please rate your school based upon the following criteria:</div>
              <div className="question">Bullying often affects.</div>
              <RatingQuestion onQuestionChange={this._onQuestionChange} questionName="bullying" />
              <div className="question">Sexual harassment often affects me.</div>
              <RatingQuestion onQuestionChange={this._onQuestionChange} questionName="sexualHarassment" />
              <div className="question">I have access to sanitation facilities at school.</div>
              <RatingQuestion onQuestionChange={this._onQuestionChange} questionName="sanitation" />
              <div className="question">There is enough space for everyone in my classroom.</div>
              <RatingQuestion onQuestionChange={this._onQuestionChange} questionName="classSize" />
              <div className="question">I encounter language barriers during class.</div>
              <RatingQuestion onQuestionChange={this._onQuestionChange} questionName="languageBarrier" />
              <div className="question">My enrollment at this school was handled fairly.</div>
              <RatingQuestion onQuestionChange={this._onQuestionChange} questionName="enrollment" />
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