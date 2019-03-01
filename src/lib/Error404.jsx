import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  var errorStyle = {
    borderStyle : 'solid',
    margin: '10px',
    padding: '10px',
  }
  return(
    <div style={errorStyle}>
      <h2>hey this page, {props.location.pathname}, isn't existing bud</h2>
      <h3>you can go <Link to="/">Home</Link> but you can't stay here...</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
