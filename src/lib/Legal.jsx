import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


function Legal(){

  var legalStyle = {
    borderStyle : 'solid',
    margin: '10px',
    padding: '10px',
  }

  return(
    <div style={legalStyle}>
      <h2>Legal</h2>
    </div>
  )

}

export default Legal;
