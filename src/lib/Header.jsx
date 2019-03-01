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
        <Link to="/scores">Enter Scores</Link>
      </div>
      <div>
        <Link to="/userLogin">userLogin</Link>
      </div>
    </div>
  )

}

export default Header;
