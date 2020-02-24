/*
 * @Author: your name
 * @Date: 2020-02-23 16:44:17
 * @LastEditTime: 2020-02-24 11:13:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\home\store\reducer.js
 */
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title:'',
  content:''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL_DATA:
      return state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content)
      })
    default:
      return state
  }
}