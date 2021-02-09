import { ADD_GAME, FINISH_GAME, UPDATE_GAME } from '../actions/types';

const initialState = {
  games: [],
};

export default function (state = initialState, action) {
  let index;
  let games;
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.game],
      };
    case FINISH_GAME:
      games = [...state.games];
      index = games.findIndex((game) => game.id === action.id);
      games.splice(index, 1);
      return {
        games,
      };
    case UPDATE_GAME:
      games = [...state.games];
      index = games.findIndex((game) => game.id === action.game.id);
      games[index] = action.game;
      return {
        games,
      };
    default:
      return state;
  }
}
