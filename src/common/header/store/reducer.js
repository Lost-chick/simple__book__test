/*
 * @Author: your name
 * @Date: 2020-02-22 14:46:35
 * @LastEditTime: 2020-02-23 15:29:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\common\header\store\reducer.js
 */
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list:[],
  page:0,
  totalPage:1 
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_LIST:
      return state.set('list',action.data).set('totalPage',action.totalPage);
    default:
      return state
  }
}