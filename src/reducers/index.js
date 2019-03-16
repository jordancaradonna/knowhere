import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountInfoReducer from './AccountInfoReducer';

export default combineReducers({
  auth: AuthReducer,
  info: AccountInfoReducer
});
