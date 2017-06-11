import React, { Component } from 'react';

// Components

// CSS
import './Guide.css';

class Gudie extends Component {
  render(){
    var guide = this.props.guide;
    var title = guide.title;
    var snippet = guide.snippet;

    return(
      <div className="guide">
        <div className="guide-wrapper">
          <div className="title">{title}</div>
          <div className="desc">{snippet}</div>
        </div>
      </div>
    )
  }
}

export default Gudie;