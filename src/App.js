import React, { Component } from 'react';

// Components
import Nav from './components/nav/Nav';

// Assets

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <Nav />
      </div>
    );
  }
}

export default App;
