import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Options.css';

const options = (props) => {
  const features = (
    <ul>
      {props.features.map((feature, index) => {
        return <li>{feature.properties.title}</li>
      })}
    </ul>
  )

  return (
    <div className="Options">
      <strong>Alert Types:</strong>
      {features}
    </div>
  );
}

export default options;
