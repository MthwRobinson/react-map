import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Options from './components/Options/Options';

var features = require('./assets/features.json');

class App extends Component {
  state = {
    features: features
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-lg-2">
            <Options features={this.state.features} />
          </div>
          <div className="col-lg-10">
            <Map features={this.state.features} />
          </div>  
        </div>
      </div>
    );
  }  

}

export default App;
