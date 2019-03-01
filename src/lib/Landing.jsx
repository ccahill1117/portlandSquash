import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import News from './News';


function Landing(){

  var landingStyle = {
    borderStyle : 'solid',
    margin: '10px',
    padding: '10px',
  }

  return(
    <div style={landingStyle}>
      <Typography component="h3" variant="h4" gutterBottom>
        Home
      </Typography>
      <News />
    </div>
  )

}

export default Landing;
