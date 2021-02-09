import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      homeTeam: { teamName: '', teamScore: 0 },
      awayTeam: { teamName: '', teamScore: 0 },
    };
  }

  handleChangeHomeTeam = (e) => {
    this.setState({
      homeTeam: { ...this.state.homeTeam, teamName: e.target.value },
    });
  };

  handleChangeAwayTeam = (e) => {
    this.setState({
      awayTeam: { ...this.state.awayTeam, teamName: e.target.value },
    });
  };

  saveGame = () => {
    if (this.state.homeTeam.teamName && this.state.awayTeam.teamName) {
      this.setState({ error: true });
      this.props.addGame({
        homeTeam: this.state.homeTeam,
        awayTeam: this.state.awayTeam,
      });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>New Game</Modal.Title>
        </Modal.Header>

        <Alert
          variant='danger'
          show={this.state.error}
          onClose={() => this.setState({ error: false })}
          dismissible>
          <Alert.Heading>Names are required</Alert.Heading>
          <p>You must write teams names.</p>
        </Alert>

        <Modal.Body>
          <Form>
            <Form.Group controlId='game.homeTeam'>
              <Form.Label>Home Team</Form.Label>
              <Form.Control
                placeholder='Name'
                value={this.state.homeTeam.teamName}
                onChange={this.handleChangeHomeTeam}
              />
            </Form.Group>

            <Form.Group controlId='game.awayTeam'>
              <Form.Label>Away Team</Form.Label>
              <Form.Control
                placeholder='Name'
                value={this.state.awayTeam.teamName}
                onChange={this.handleChangeAwayTeam}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => this.props.chatVisibilityHandler()}>
            Close
          </Button>
          <Button variant='primary' onClick={this.saveGame}>
            Save Changes
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

NewGame.propTypes = {
  addGame: PropTypes.func,
  chatVisibilityHandler: PropTypes.func,
};

export default NewGame;
