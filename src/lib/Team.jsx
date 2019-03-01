import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


function Team(){

    var teamStyle = {

    }

  return(
    <div style={teamStyle}>
      <ol>
        <li>
          <h4>#1 - {props.}</h4>
        </li>
      </ol>
    </div>
  )
}

Team.propTypes = {
  teamName: PropTypes.string,
  player1: PropTypes.object,
  player2: PropTypes.object,
  player3: PropTypes.object,
  player4: PropTypes.object,
  player5: PropTypes.object,

}

export default Team;
