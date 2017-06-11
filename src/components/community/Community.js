import React, { Component } from 'react';

// Components
import NavTab from './navTab/NavTab';
import HowTo from './howTo/HowTo';
import Discussions from './discussions/Discussions';
import Resources from './resources/Resources';

// CSS
import './Community.css';

// Helpers

class Community extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab: 'howto',
    }

    this._onTabClick = this._onTabClick.bind(this);
  }

  displayCurrentTab(){
    var currentTab = this.state.currentTab;

    var tabs = {
      'howto': <HowTo />,
      'discussions': <Discussions />,
      'resources': <Resources />
    }

    return tabs[currentTab];
  }

  _onTabClick(tabName){
    this.setState({currentTab: tabName});
  }

  render(){
    var currentTab = this.state.currentTab;

    return(
      <div className="community">
        <div className="community-wrapper">
          <div className="title">Community</div>
          <NavTab currentTab={currentTab} onTabClick={this._onTabClick} />
          {this.displayCurrentTab()}
        </div>
      </div>
    )
  }
}

export default Community;