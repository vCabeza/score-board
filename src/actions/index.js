import { ADD_GAME, FINISH_GAME, UPDATE_GAME } from './types';

export function addGame(game) {
  return function (dispatch) {
    dispatch({ type: ADD_GAME, game });
  };
}

export function finishGame(id) {
  return function (dispatch) {
    dispatch({ type: FINISH_GAME, id });
  };
}

export function updateGame(game) {
  return function (dispatch) {
    dispatch({ type: UPDATE_GAME, game });
  };
}
