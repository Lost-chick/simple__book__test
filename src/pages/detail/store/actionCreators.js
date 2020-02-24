/*
 * @Author: your name
 * @Date: 2020-02-22 17:11:46
 * @LastEditTime: 2020-02-24 11:19:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\common\header\store\actionCreator.js
 */
import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios'

const changeDetailData =(data)=>({
  type:actionTypes.CHANGE_DETAIL_DATA,
  title:data.title,
  content:data.content
})
export const  getDetail =(id)=> {
  return (dispatch) => {
    axios.get('/api/detail.json?='+id).then((res)=>{
      const data = res.data.data;
      dispatch(changeDetailData(data))
    }).catch(()=>{
      console.log("error")
    })
  }
}
