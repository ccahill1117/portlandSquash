import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


function Profile(props) {



    return (
      <div>
        <Typography component="h3" variant="h4" gutterBottom>
          {props.name}
        </Typography>
      </div>
    );
  }


Profile.propTypes = {
  name: PropTypes.string,
};

export default Profile;
