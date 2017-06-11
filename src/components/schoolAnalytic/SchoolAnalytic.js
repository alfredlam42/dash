import React, { Component } from 'react';

// Components
import Title from './title/Title';
import ReportedBy from './reportedBy/ReportedBy';
import ReportedCases from './reportedCases/ReportedCases';


// CSS
import './SchoolAnalytic.css';

// Helpers

class SchoolAnalytic extends Component {
  render(){
    var schoolName = this.props.params.schoolName;

    return(
      <div className="analytics">
        <div className="analytics-wrapper">
          <Title schoolName={schoolName} />
          <ReportedBy />
          <ReportedCases />
        </div>
      </div>
    )
  }
}

export default SchoolAnalytic;