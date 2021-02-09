import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { GrEdit, GrAdd } from 'react-icons/gr';
import GameModal from './GameModal';
import * as actions from '../../actions';

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false, selectedGame: null };

    this.chatVisibilityHandler = this.chatVisibilityHandler.bind(this);
  }

  chatVisibilityHandler = (game = null) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      selectedGame: game,
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col xs={{ offset: 10 }} lg={{ offset: 7 }}>
            <GrAdd onClick={() => this.chatVisibilityHandler()} />
          </Col>
        </Row>
        {this.props.games.map((game, index) => (
          <Row key={index}>
            <Col xs='8' lg={{ span: 4, offset: 3 }}>
              {game.homeTeam.teamName} ({game.homeTeam.teamScore}) -{' '}
              {game.awayTeam.teamName} ({game.awayTeam.teamScore})
            </Col>
            <Col xs='2'>
              <GrEdit onClick={() => this.chatVisibilityHandler(game)} />
            </Col>
            <Col xs='2'>
              <GrEdit onClick={() => this.props.finishGame(game.id)} />
            </Col>
          </Row>
        ))}
        <GameModal
          isModalOpen={this.state.isModalOpen}
          chatVisibilityHandler={this.chatVisibilityHandler}
          selectedGame={this.state.selectedGame}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.scoreboardReducer };
};

export default connect(mapStateToProps, actions)(GamesList);
