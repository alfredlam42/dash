import React, { Component } from 'react';

// Components
import Guide from '../guide/Guide';

// CSS
import './Resources.css';

// Helpers
import getResources from '../../../assets/js/getResources';

class Resources extends Component {
  constructor(props){
    super(props);
    this.state = {
      guides: []
    }
  }

  componentWillMount(){
    var guides = getResources();

    this.setState({guides: guides});
  }

  renderResources(){
    var guides = this.state.guides;

    return guides.map(function(guide){
      return <Guide key={guide.id} guide={guide} />
    })
  }

  render(){
    return(
      <div className="resources">
        <div className="resources-wrapper">
          {this.renderResources()}
        </div>
      </div>
    )
  }
}

export default Resources;