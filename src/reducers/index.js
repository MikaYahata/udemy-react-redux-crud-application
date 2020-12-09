import { combineReducers } from 'redux'
import events from './events'

/**
 * reducersが複数になれば、引数が列挙される ex) combineReducers({ foo, bar, woo })
 */
export default combineReducers({ events })