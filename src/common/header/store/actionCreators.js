/*
 * @Author: your name
 * @Date: 2020-02-22 17:11:46
 * @LastEditTime: 2020-02-23 15:28:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\common\header\store\actionCreator.js
 */
import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios'

export const  searchFocus =()=> ({
  type:actionTypes.SEARCH_FOCUS
})
export const  searchBlur =()=> ({
  type:actionTypes.SEARCH_BLUR
})
export const  mouseEnter =()=> ({
  type:actionTypes.MOUSE_ENTER
})
export const  mouseLeave =()=> ({
  type:actionTypes.MOUSE_LEAVE
})
// 改变数据类型为immutable
const changeList = (data)=>({
  type:actionTypes.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length / 10)
})
export const  getList =()=> {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data;
      if(data.code === 0) {
        dispatch(changeList(data.data))
      }
    }).catch(()=>{
      console.log('error')
    })
  }
}