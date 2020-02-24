/*
 * @Author: your name
 * @Date: 2020-02-23 16:15:32
 * @LastEditTime: 2020-02-23 20:02:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\home\components\Writer.js
 */
import React from 'react'
import { connect } from 'react-redux';

function Writer(props) {
  return (
    <div className="writer-container">
     {/* <div className="writer-title">
       <div className="title">推荐作者</div>
       <div className="change-writer">
         换一换
       </div>
     </div> */}
     writerWork
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Writer)
