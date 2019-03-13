import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Teams extends Component {
  constructor () {
    super()
    this.state = {
      teams: [],
    };

  }

  componentDidMount() {
    fetch('http://localhost:3001/api/teams')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }



  render () {
    return (

    <div></div>
  )
  }
}

export default Teams
