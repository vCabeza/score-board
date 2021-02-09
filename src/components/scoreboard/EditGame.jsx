import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button } from 'react-bootstrap';

class EditGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        homeTeam: {},
        awayTeam: {},
      },
    };
  }

  componentDidMount() {
    const game = { ...this.props.selectedGame };
    this.setState({ game });
  }

  handleChangeHomeTeam = (e) => {
    this.setState({
      game: {
        ...this.state.game,
        homeTeam: {
          ...this.state.game.homeTeam,
          teamScore: Number(e.target.value),
        },
      },
    });
  };

  handleChangeAwayTeam = (e) => {
    this.setState({
      game: {
        ...this.state.game,
        awayTeam: {
          ...this.state.game.awayTeam,
          teamScore: Number(e.target.value),
        },
      },
    });
  };

  render() {
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.selectedGame.homeTeam.teamName} -{' '}
            {this.props.selectedGame.awayTeam.teamName}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId='homeTeam'>
              <Form.Label>
                {this.props.selectedGame.homeTeam.teamName} Score (Home)
              </Form.Label>
              <Form.Control
                required
                type='number'
                placeholder='Score'
                value={this.state.game.homeTeam.teamScore}
                onChange={this.handleChangeHomeTeam}
              />
            </Form.Group>

            <Form.Group controlId='awayTeam'>
              <Form.Label>
                {this.props.selectedGame.awayTeam.teamName} Score (Away)
              </Form.Label>
              <Form.Control
                required
                type='number'
                placeholder='Score'
                value={this.state.game.awayTeam.teamScore}
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
            onClick={() => this.props.updateGame(this.state.game)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

EditGame.propTypes = {
  updateGame: PropTypes.func,
  chatVisibilityHandler: PropTypes.func,
  selectedGame: PropTypes.object,
};

export default EditGame;
