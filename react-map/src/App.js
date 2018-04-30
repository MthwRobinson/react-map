import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';

var features = require('./assets/features.json');

class App extends Component {
  state = {
    features: features
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Map features={this.state.features} />
      </div>
    );
  }  

}

export default App;
