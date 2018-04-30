import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';

const header = (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">News Alerts</a>
      <button className="navbar-toggler" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default header;

