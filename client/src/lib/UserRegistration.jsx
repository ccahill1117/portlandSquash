import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function UserRegistration(){
  var registrationStyle = {
    borderStyle : 'solid',
    margin: '10px',
    padding: '10px',
  }

  return (
    <div style={registrationStyle}>
      <Typography component="h3" variant="h4" gutterBottom>
        Enter New User Registration
      </Typography>
      <form>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          />

      </form>

    </div>
  )

}

export default UserRegistration;
