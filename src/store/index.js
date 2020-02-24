/*
 * @Author: your name
 * @Date: 2020-02-22 14:04:33
 * @LastEditTime: 2020-02-22 19:05:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\store\index.js
 */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
export default store;