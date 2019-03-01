import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


function Header(){

    var headStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 100px)',
      justifyContent: 'center',
    }

    var linkStyle = {
      textDecoration: 'none',
      color: 'black',
    }

  return(
    <div style={headStyle}>
      <div>
        <Link style={linkStyle} to="/">Home</Link>
      </div>
      <div>
        <Link style={linkStyle} to="/scores">Enter Scores</Link>
      </div>
      <div>
        <Link style={linkStyle} to="/userReg">New User</Link>
      </div>
      <div>
        <Link style={linkStyle} to="/profile">test profile...</Link>
      </div>
    </div>
  )

}

export default Header;
