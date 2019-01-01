import { combineReducers } from 'redux';
import albums from './albums/reducers';

export default combineReducers({
  albums,
});
