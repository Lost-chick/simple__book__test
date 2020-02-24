/*
 * @Author: your name
 * @Date: 2020-02-23 16:15:19
 * @LastEditTime: 2020-02-23 19:50:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\home\components\Recommend.js
 */
import React from 'react'
import { connect } from 'react-redux';

function Recommend(props) {
  const { recommendList } = props;
  return (
    <div className="recommend-container">
      {
        recommendList.map(item => {
          return (
            <div className="recommend-item" key={item.get('id')}>
              <img src={item.get('imgUrl')} alt="" />
            </div>
          )
        })
      }
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
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
