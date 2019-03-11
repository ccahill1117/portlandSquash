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

    var inputStyle = {
      width: '35px',
      fontSize: '20px',

    }
    var scoresContainer = {
      justifyContent: 'center',
      display: "grid",
      gridTemplateColumns: "50px 50px 50px 50px 50px 50px",
      gridTemplateRows: "50px 50px",
    }

    return (
      <div style={scoresStyle}>
        <Typography component="h3" variant="h4" gutterBottom>
          Scores Form
        </Typography>

        <div style={scoresContainer}>

            <div>
              Player 1
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>

            <div>
              Player 2
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
              <input maxLength="2" style={inputStyle}></input>
            </div>
            <div>
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
