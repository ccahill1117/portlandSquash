import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


function Team(props){

    var teamStyle = {

    }

  return(
    <div style={teamStyle}>
      <ul>
        <li>
          <h4>#1 - {props.player1.firstName}</h4>
        </li>
        <li>
          <h4>#2 - {props.player2.firstName}</h4>
        </li>
        <li>
          <h4>#3 - {props.player3.firstName}</h4>
        </li>
        <li>
          <h4>#4 - {props.player4.firstName}</h4>
        </li>
        <li>
          <h4>#5 - {props.player5.firstName}</h4>
        </li>
      </ul>
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
