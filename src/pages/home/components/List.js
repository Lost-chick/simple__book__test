/*
 * @Author: your name
 * @Date: 2020-02-23 16:15:09
 * @LastEditTime: 2020-02-24 11:15:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\home\components\List.js
 */
import React from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';

function List(props) {
  const { articleList, getMoreList } = props;
  return (
    <div className="list-container">
      {
        articleList.map((item, index) => {
          return (
            <Link to={"/detail/"+item.get('id')} key={item.get('id')}>
              <div className="list-item">
                <img className="pic" src="https://upload-images.jianshu.io/upload_images/16235793-7600e6ee603e603e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
                <div className="list-info">
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">
                    {item.get('description')}
                  </p>
                </div>
              </div>
            </Link>

          )
        })
      }
      <div className="load-more" onClick={getMoreList}>
        加载更多
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList() {
      dispatch(actionCreators.getMoreList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
