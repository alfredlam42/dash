import React, { Component } from 'react';

// Components
import Guide from '../guide/Guide';

// CSS
import './Discussions.css';

// Helpers
import getDiscussions from '../../../assets/js/getDiscussions';

class Discussions extends Component {
constructor(props){
    super(props);
    this.state = {
      guides: []
    }
  }

  componentWillMount(){
    var guides = getDiscussions();

    this.setState({guides: guides});
  }

  renderDiscussions(){
    var guides = this.state.guides;

    return guides.map(function(guide){
      return <Guide key={guide.id} guide={guide} />
    })
  }

  render(){
    return(
      <div className="discussions">
        <div className="discussions-wrapper">
          {this.renderDiscussions()}
          <div className="add-discussion">Create New Post</div>
        </div>
      </div>
    )
  }
}

export default Discussions;