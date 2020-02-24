/*
 * @Author: your name
 * @Date: 2020-02-22 17:11:46
 * @LastEditTime: 2020-02-23 21:04:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\common\header\store\actionCreator.js
 */
import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios'

const changeHomeData =(data)=>({
  type:actionTypes.CHANGE_HOME_DATA,
  topicList:data.topicList,
  articleList:data.articleList
})
export const  getHomeList =()=> {
  return (dispatch) => {
    axios.get('/api/home.json').then((res)=>{
      const data = res.data.data
      dispatch(changeHomeData(data))
    }).catch(()=>{
      console.log("error")
    })
  }
}
const addHomeList = (data)=>({
  type:actionTypes.ADD_ARTICLE_LIST,
  data: fromJS(data)
})
export const  getMoreList =()=> {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res)=>{
      const data = res.data.data;
      console.log(data)
      dispatch(addHomeList(data))
    }).catch(()=>{
      console.log("error")
    })
  }
}
export const  toggleTopShow =(show)=> ({
  type: actionTypes.TOGGLE_SCROLL_SHOW,
  show
})