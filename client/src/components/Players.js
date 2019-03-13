import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Players extends Component {
  constructor () {
    super()
    this.state = {
      players: [],
    };

  }

  componentDidMount() {
    fetch('http://localhost:3001/api/players')
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

export default Players
