import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Map from './components/Map/Map';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }  

}

export default App;
