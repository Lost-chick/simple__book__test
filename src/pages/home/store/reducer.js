/*
 * @Author: your name
 * @Date: 2020-02-23 16:44:17
 * @LastEditTime: 2020-02-23 21:02:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\home\store\reducer.js
 */
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [
    {
    id:1,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
    id:2,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
    id:3,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
    id:4,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    }
  ],
  showScroll:false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
      })
    case constants.ADD_ARTICLE_LIST:
      return state.set('articleList', state.get('articleList').concat(action.data))
    case constants.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}