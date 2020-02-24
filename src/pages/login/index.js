/*
 * @Author: your name
 * @Date: 2020-02-23 16:03:08
 * @LastEditTime: 2020-02-24 11:43:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editre
 * @FilePath: \simple_book\src\pages\detail\index.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <input type="text" placeholder="账号"/>
          <input type="text" placeholder="密码"/>
          <button>登录</button>
        </div>
      </div>
    )
  }
  componentDidMount() {

  }
}
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
