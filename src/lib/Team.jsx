import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


function Team(){

    var teamStyle = {

    }

  return(
    <div style={teamStyle}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/scores">Enter Scores</Link>
      </div>
      <div>
        <Link to="/userReg">New User</Link>
      </div>
      <div>
        <Link to="/profile">test profile...</Link>
      </div>
    </div>
  )

}

export default Team;
