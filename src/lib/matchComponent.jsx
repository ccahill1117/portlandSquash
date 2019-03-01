import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


function matchComponent(props){

    var matchComponentStyle = {

    }

    // this component will take two teams' names and players and put them adjacent to one another

  return(
    <div style={matchComponentStyle}>

    </div>
  )
}

matchComponent.propTypes = {
  team1Name: PropTypes.string,
  team1: PropTypes.array,
  team2Name: PropTypes.string,
  team2: PropTypes.array,

}

export default matchComponent;
