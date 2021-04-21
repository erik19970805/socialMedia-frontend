import { combineReducers } from 'redux';
import auth from './auth.reducer';
import alert from './alert.reducer';
import valid from './valid.reducer';

export default combineReducers({ auth, alert, valid });
