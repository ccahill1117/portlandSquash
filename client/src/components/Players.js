import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import Profile from './Profile';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from './Session';
import { withFirebase } from './Firebase';

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      players: [],
    };
  }


  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.setState({
        users: snapshot.val(),
      });
    });
    fetch('http://localhost:3001/api/players')
      .then(response => response.json())
      .then(players => this.setState({ players }));
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>

          {this.state.players.map(function(item, i){
            return <Profile
              name={item.name}
              key={i}
              />

        })
      }

      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(condition),
)(Players);
