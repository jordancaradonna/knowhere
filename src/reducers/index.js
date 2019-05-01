import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountInfoReducer from './AccountInfoReducer';
<<<<<<< HEAD
import ExploreSearchReducer from './ExploreSearchReducer';
=======
import OutingReducer from './OutingReducer';
import FeedReducer from './FeedReducer';
>>>>>>> Development/16-CreateOuting

export default combineReducers({
  auth: AuthReducer,
  info: AccountInfoReducer,
<<<<<<< HEAD
  explore: ExploreSearchReducer

=======
  out: OutingReducer,
  feed: FeedReducer
>>>>>>> Development/16-CreateOuting
});
