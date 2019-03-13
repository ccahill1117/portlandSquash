import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getPlayers = this.getPlayers.bind(this)
    this.getPlayer = this.getPlayer.bind(this)
  }

  componentDidMount () {
    this.getPlayers()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPlayers () {
    this.fetch('/api/players')
      .then(players => {
        if (players.length) {
          this.setState({players: players})
          this.getPlayer(players[0].id)
        } else {
          this.setState({players: []})
        }
      })
  }

  getPlayer (id) {
    this.fetch(`/api/players/${id}`)
      .then(player => this.setState({player: player}))
  }

  render () {
    let {players, player} = this.state
    return players
      ? <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            List of Ingredients
          </Header.Content>
        </Header>
        <Divider hidden section />
        {players && players.length
          ? <Button.Group color='teal' fluid widths={players.length}>
            {Object.keys(players).map((key) => {
              return <Button active={player && player.id === players[key].id} fluid key={key} onClick={() => this.getPlayer(players[key].id)}>
                {players[key].title}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No players found.</Container>
        }
        <Divider section />
        {player &&
          <Container>
            <Header as='h2'>{player.title}</Header>
            {player.description && <p>{player.description}</p>}
            {player.ingredients &&
              <Segment.Group>
                {player.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
              </Segment.Group>
            }
            {player.steps && <p>{player.steps}</p>}
            {player.source && <Button basic size='tiny' color='teal' href={player.source}>Source</Button>}
          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default App
