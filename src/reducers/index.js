import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountInfoReducer from './AccountInfoReducer';
import ExploreSearchReducer from './ExploreSearchReducer';
import OutingReducer from './OutingReducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
  auth: AuthReducer,
  info: AccountInfoReducer,
  explore: ExploreSearchReducer,
  out: OutingReducer,
  feed: FeedReducer
});
