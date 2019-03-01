import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

    var headStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 100px)',
      justifyContent: 'center',
    }

  return(
    <div style={headStyle}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/scores">Enter Scores</Link>
      </div>
      <div>
        <Link to="/userReg">New User</Link>
      </div>
    </div>
  )

}

export default Header;
