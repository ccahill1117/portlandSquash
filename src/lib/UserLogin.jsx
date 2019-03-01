import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function UserLogin(){
  return (
    <div>
      <Typography component="h3" variant="h4" gutterBottom>
        Register Below
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

export default UserLogin;
