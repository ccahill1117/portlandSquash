import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


class ScoresForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    };
    // this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  // handleTroubleshootingConfirmation(){
  //   this.setState({formVisibleOnPage: true});
  // }

  render(){

    var scoresStyle = {
      borderStyle : 'solid',
      margin: '10px',
      padding: '10px',
    }

    var scoreRowStyle = {
      margin: '3px',
      padding: '3px',
    }

    var inputStyle = {
      width: '35px',
      fontSize: '20px',

    }

    return (
      <div style={scoresStyle}>
        <Typography component="h3" variant="h4" gutterBottom>
          Scores Form
        </Typography>

        <div style={scoreRowStyle}>
          <div>
            Player 1
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
          </div>
        </div>
        <div style={scoreRowStyle}>
          <div>
            Player 2
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
            <input maxLength="2" style={inputStyle}></input>
          </div>
        </div>

      </div>
    );
  }
}

ScoresForm.propTypes = {

};

export default ScoresForm;
