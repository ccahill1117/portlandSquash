import React from 'react';
import { Link } from 'react-router-dom';

function Landing(){

  var landingStyle = {
    borderStyle : 'solid',
    margin: '10px',
    padding: '10px',
  }

  return(
    <div style={landingStyle}>
      <h2>Landing</h2>
    </div>
  )

}

export default Landing;
