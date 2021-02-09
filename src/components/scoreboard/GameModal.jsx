import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewGame from './NewGame';
import EditGame from './EditGame';

class GameModal extends Component {
  addGame = (game) => {
    this.props.addGame({ ...game, id: this.props.games.length + 1 });
    this.props.chatVisibilityHandler();
  };

  updateGame = (game) => {
    this.props.updateGame(game);
    this.props.chatVisibilityHandler();
  };

  render() {
    return (
      <Modal
        show={this.props.isModalOpen}
        onHide={() => this.props.chatVisibilityHandler()}>
        {this.props.selectedGame !== null && this.props.selectedGame ? (
          <EditGame
            selectedGame={this.props.selectedGame}
            updateGame={this.updateGame}
            chatVisibilityHandler={this.props.chatVisibilityHandler}
          />
        ) : (
          <NewGame
            addGame={this.addGame}
            chatVisibilityHandler={this.props.chatVisibilityHandler}
          />
        )}
      </Modal>
    );
  }
}

GameModal.propTypes = {
  isModalOpen: PropTypes.bool,
  selectedGame: PropTypes.object,
  chatVisibilityHandler: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { ...state.scoreboardReducer };
};

export default connect(mapStateToProps, actions)(GameModal);
