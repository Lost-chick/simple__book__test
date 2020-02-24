/*
 * @Author: your name
 * @Date: 2020-02-22 14:05:52
 * @LastEditTime: 2020-02-24 11:03:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\store\reducer.js
 */
import {combineReducers} from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import {reducer as homeReducer } from '../pages/home/store'
import {reducer as detailReducer } from '../pages/detail/store'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})

