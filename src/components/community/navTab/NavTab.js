import React, { Component } from 'react';

// Components

// CSS
import './NavTab.css';

// Helpers

class NavTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab: this.props.currentTab,
    }

    this._onClick = this._onClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    var currentTab = nextProps.currentTab;

    this.setState({currentTab: currentTab});
  }

  styleCurrentTab(tabName){
    var currentTab = this.state.currentTab;

    if (currentTab === tabName){
      return {borderBottom: '3px solid #2d9cf5', borderTop: '3px solid transparent'};
    }
  }

  _onClick(tabName){
    this.props.onTabClick(tabName);
  }

  render(){
    return(
      <div className="nav-tab">
        <div className="nav-tab-wrapper">
          <div onClick={() => {this._onClick('howto')}} style={this.styleCurrentTab('howto')} className="tabSelection">How To</div>
          <div onClick={() => {this._onClick('discussions')}} style={this.styleCurrentTab('discussions')} className="tabSelection">Discussions</div>
          <div onClick={() => {this._onClick('resources')}} style={this.styleCurrentTab('resources')} className="tabSelection">Resources</div>
        </div>
      </div>
    )
  }
}

export default NavTab;