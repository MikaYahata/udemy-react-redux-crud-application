import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './events';

/**
 * reducersが複数になれば、引数が列挙される ex) combineReducers({ foo, bar, woo })
 */
export default combineReducers({ events, form })