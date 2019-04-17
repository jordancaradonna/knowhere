import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountInfoReducer from './AccountInfoReducer';
import ExploreSearchReducer from './ExploreSearchReducer';

export default combineReducers({
  auth: AuthReducer,
  info: AccountInfoReducer,
  explore: ExploreSearchReducer

});
