import React, { Component } from 'react';

// Components
import ToolBar from './toolBar/ToolBar';
import School from './school/School';

// CSS
import './SchoolList.css';

// Helpers

class SchoolList extends Component {
  render(){
    return(
      <div className="school-list">
        <div className="school-list-wrapper">
          <div className="title">Schools</div>
          <ToolBar />
          <div className="list">
            <School schoolName="School 1" rating={1} />
            <School schoolName="School 2" rating={3} />
            <School schoolName="School 3" rating={3} />
            <School schoolName="School 4" rating={3} />
            <School schoolName="School 5" rating={3} />
            <School schoolName="School 6" rating={3} />
          </div>
        </div>
      </div>
    )
  }
}

export default SchoolList;