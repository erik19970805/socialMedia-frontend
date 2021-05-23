import { combineReducers } from 'redux';
import auth from './auth.reducer';
import alert from './alert.reducer';
import valid from './valid.reducer';
import theme from './theme.reducer';
import user from './user.reducer';

export default combineReducers({ auth, alert, valid, theme, user });
