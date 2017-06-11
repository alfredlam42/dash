import React, { Component } from 'react';

// Components
import Guide from '../guide/Guide';

// CSS
import './HowTo.css';

// Helpers
import getGuides from '../../../assets/js/getGuides';

class HowTo extends Component {
  constructor(props){
    super(props);
    this.state = {
      guides: []
    }
  }

  componentWillMount(){
    var guides = getGuides();

    this.setState({guides: guides});
  }

  renderGuides(){
    var guides = this.state.guides;

    return guides.map(function(guide){
      return <Guide key={guide.id} guide={guide} />
    })
  }

  render(){
    return(
      <div className="how-to">
        <div className="how-to-wrapper">
          {this.renderGuides()}
        </div>
      </div>
    )
  }
}

export default HowTo;