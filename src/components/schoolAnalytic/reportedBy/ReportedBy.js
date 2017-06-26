import React, { Component } from 'react';

// Components
import { Pie } from 'react-chartjs-2';

// CSS
import './ReportedBy.css';

// Helpers

class ReportedBy extends Component {
  render(){
    var femaleNumber = Math.floor(Math.random() * 100);
    var maleNumber = Math.floor(Math.random() * 100);
    var parentNumber = Math.floor(Math.random() * 100);

    var data = {
      datasets: [{
        data: [femaleNumber, maleNumber, parentNumber],
        backgroundColor:[
          'rgba(146, 242, 235, 1)',
          'rgba(245, 59, 46, 1)',
          'rgba(255, 193, 7, 1)'
        ]
      }],
      labels: [
        'Female Students',
        'Male Students',
        'Parents'
      ],
    };

    var options = {
      maintainAspectRatios: true,
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 14
        }
      }
    }

    return(
      <div className="reported-by">
        <div className="reported-by-title">Issues Reported By</div>
        <Pie data={data} height="160" options={options} />
      </div>
    )
  }
}

export default ReportedBy;