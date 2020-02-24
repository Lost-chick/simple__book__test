/*
 * @Author: your name
 * @Date: 2020-02-24 11:50:59
 * @LastEditTime: 2020-02-24 11:55:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\write\index.js
 */
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
import { Redirect } from 'react-router-dom';

class Write extends Component {
  render() {
    const {loginStatus} = this.props;
    if(loginStatus) {
      return (
        <div>写文章</div>
      )
    }else {
      return <Redirect to="/login"/>
    }
    
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
export default connect(mapStateToProps, mapDispatchToProps)(Write)
