import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './styles/HeaderStyles.css';


function Header(){

    var headStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 125px)',
      justifyContent: 'center',
    }

    // var linkStyle = {
    //   textDecoration: 'none',
    //   color: 'black',
    // }

    var linkDivStyle = {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'tomato',
      margin: '5px',
      padding: '10px',
      justifyContent: 'center',
    }

  return(
    <div style={headStyle}>

      <div style={linkDivStyle}>
        <Link class="link" to="/">Home</Link>
      </div>

      <div style={linkDivStyle}>
        <Link class="link" to="/scores">Enter Scores</Link>
      </div>

      <div style={linkDivStyle}>
        <Link class="link" to="/userReg">New User</Link>
      </div>

      <div style={linkDivStyle}>
        <Link class="link" to="/profile">test profile...</Link>
      </div>

      <div style={linkDivStyle}>
        <Link class="link" to="/smigel">Smigel / Yusem Award</Link>
      </div>

    </div>
  )

}

export default Header;
