import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


function Footer(){

  var footStyle = {
    borderStyle : 'solid',
    margin: '10px',
    padding: '10px',
  }

  return(
    <div style={footStyle}>
      <h2>Footer</h2>
    </div>
  )

}

export default Footer;
