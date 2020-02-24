import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import * as actionCreator from './store/actionCreators'
import './index.less'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    console.log(this.props)
    return (
      <div className="home-container">
        <div className="home-left">
          <div className="banner">
            <img src="https://upload.jianshu.io/admin_banners/web_images/4897/ffa31eee56eb87af5d1074a395c55ca816450738.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          </div>
          <Topic />
          <List />
        </div>
        <div className="home-right">
          <Recommend />
          <Writer />
        </div>
        {
          this.props.showScroll ? <div className="back-top" onClick={this.handleScrollTop}>^</div> : null
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScorllShow)
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.changeScorllShow)
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreator.getHomeList();
      dispatch(action)
    },
    changeScorllShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreator.toggleTopShow(true))
      } else {
        dispatch(actionCreator.toggleTopShow(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

