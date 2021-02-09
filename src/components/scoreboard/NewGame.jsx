import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button } from 'react-bootstrap';

class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>New Game</Modal.Title>
        </Modal.Header>

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
          <Button
            variant='primary'
            onClick={() =>
              this.props.addGame({
                homeTeam: this.state.homeTeam,
                awayTeam: this.state.awayTeam,
              })
            }>
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
