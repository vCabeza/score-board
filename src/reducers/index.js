import { combineReducers } from 'redux';
import scoreboardReducer from './scoreboardReducer';

export default combineReducers({
  scoreboardReducer: scoreboardReducer,
});
