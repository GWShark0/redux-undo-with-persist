import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import counter from './counter';

const undoConfig = {
  debug: true,
};

const rootReducer = combineReducers({
  counter: undoable(counter, undoConfig),
});

export default rootReducer;
