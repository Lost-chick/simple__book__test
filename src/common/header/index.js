/*
 * @Author: your name
 * @Date: 2020-02-22 11:40:46
 * @LastEditTime: 2020-02-24 11:54:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\common\header\index.js
 */
import React from 'react';
import { connect } from 'react-redux';
import logoImg from '../../statics/nav-logo.png';
import './index.less';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';


function Header(props) {
  const { focused, handleInputFocus, handleInputBlur, handleEnter, handleLeave, list, totalPage, mouseIn } = props;

  return (
    <div className="header-container">
      <a href="/" className="logo">
        <img src={logoImg} alt="" className="nva-img" />
      </a>
      <ul className="nav">
        <li className="left active">首页</li>
        <li className="left">下载app</li>
        <li className="right">登录</li>
        <li className="right"><i className="iconfont iconAa" /></li>
        <li className="search left">
          <input
            type="text"
            placeholder="搜索"
            onFocus={() => {
              handleInputFocus(list)
            }}
            onBlur={handleInputBlur}
            className={focused ? "input-search focused" : "input-search blur"}
          />
          <i className={focused ? "iconfont iconfangdajing focused" : "iconfont iconfangdajing"} />
          {(focused || mouseIn) ?
            <div className="search-info" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <div className="search-title">
                <span>热门搜索</span>
                <span className="change">换一换</span>
              </div>
              <ul className="options">
                {list.map((item, index) => {
                  return <li key={index} className="option-item">{item}</li>
                })}
              </ul>
            </div> : null
          }

        </li>
      </ul>
      <div className="addtion">
        <Link to="write">
          <button className="btn bth-write">
            <i className="iconfont iconyumaobi" />写文章
        </button>
        </Link>
        <button className="btn btn-reg"
          onClick={props.handleInputFocus}
        >注册</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),// 多了一层
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // 避免重复请求数据
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleLeave() {
      dispatch(actionCreators.mouseLeave());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
