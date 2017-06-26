import React, { Component } from 'react';

// Components
import { HorizontalBar } from 'react-chartjs-2';

// CSS
import './ReportedCases.css';

// Helpers

class ReportedCases extends Component {
  render(){
    var bullyingNumber = Math.floor(Math.random() * 100);
    var sexualHarassmentNumber = Math.floor(Math.random() * 100);
    var sanitationNumbers = Math.floor(Math.random() * 100);
    var classNumber = Math.floor(Math.random() * 100);
    var languageNumber = Math.floor(Math.random() * 100);
    var enrollmentNumber = Math.floor(Math.random() * 100);

    var data = {
      datasets: [
        {
          data: [bullyingNumber, sexualHarassmentNumber, sanitationNumbers, classNumber, languageNumber, enrollmentNumber],
          backgroundColor: [
            'rgba(0, 200, 83, 1)',
            'rgba(126, 23, 127, 1)',
            'rgba(146, 242, 235, 1)',
            'rgba(245, 59, 46, 1)',
            'rgba(255, 193, 7, 1)',
            'rgba(255, 143, 225, 1)',
          ]
        }
      ],
      labels: ['Bullying', 'Sexual Harassment', 'Sanitation Facilities', 'Class Size', 'Language Barrier', 'Enrollment'],
    };

    var options = {
      maintainAspectRatios: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
        }],
        yAxes: [{
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }
        }]
      }
    }

    return(
      <div className="reported-cases">
        <div className="reported-cases-title">Number of Reported Cases</div>
        <HorizontalBar height="300" data={data} options={options} />
      </div>
    )
  }
}

export default ReportedCases;