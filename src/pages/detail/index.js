/*
 * @Author: your name
 * @Date: 2020-02-23 16:03:08
 * @LastEditTime: 2020-02-24 11:19:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editre
 * @FilePath: \simple_book\src\pages\detail\index.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store'

import './index.less'

class Detail extends Component {
  render() {
    console.log(this.props.match.params.id)
    const { title, content } = this.props;
    return (
      <div className="detail-container">
        <div className="detail-header">
          {title}
        </div>
        <div className="detail-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
