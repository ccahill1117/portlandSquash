import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


function NewsItem(props){

    var newsItemStyle = {
      borderStyle : 'solid',
      margin: '10px',
      padding: '10px',
    }

  return(
    <div style={newsItemStyle}>
      <p>{props.title}</p>
      <p>{props.body}</p>

    </div>
  )
}

NewsItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,

}

export default NewsItem;
