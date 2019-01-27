 import { combineReducers } from 'redux';
 import counter from './counter';
 import wating from './wating';

 export default combineReducers({
     counter,
     wating,
 })