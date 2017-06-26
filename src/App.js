import React, { Component } from 'react';

// Components
import Nav from './components/nav/Nav';

// Assets
import 'material-components-web/dist/material-components-web.min.css';

// CSS
import './App.css';

class App extends Component {
  componentWillMount(){
    localStorage.setItem("city", 'Tripoli, Lebanon');
  }

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
