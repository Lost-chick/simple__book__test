/*
 * @Author: your name
 * @Date: 2020-02-23 16:15:25
 * @LastEditTime: 2020-02-23 19:49:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\home\components\Topic.js
 */
import React from 'react'
import { connect } from 'react-redux';

// immuta
function Topic(props) {
  const { topicList } = props;
  return (
    <div className="topic-container">
      <ul className="topic">
        {
          topicList.map(item =>(
            <li className="topic-item" key={item.get('id')}>
              {item.get('title')}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic)
