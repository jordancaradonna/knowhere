import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountInfoReducer from './AccountInfoReducer';
import OutingReducer from './OutingReducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
  auth: AuthReducer,
  info: AccountInfoReducer,
  out: OutingReducer,
  feed: FeedReducer
});
