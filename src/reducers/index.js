import { combineReducers } from 'redux'
import count from './count'

/**
 * reducersが複数になれば、引数が列挙される ex) combineReducers({ foo, bar, baz })
 */
export default combineReducers({ count })