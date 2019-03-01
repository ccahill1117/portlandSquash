import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';


function News(props){

    var NewsStyle = {
      borderStyle : 'solid',
      margin: '10px',
      padding: '10px',
    }

  return(
    <div style={NewsStyle}>
      <NewsItem title={"example"} body={"text"} />
    </div>
  )
}

News.propTypes = {

}

export default News;
