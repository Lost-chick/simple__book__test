/*
 * @Author: your name
 * @Date: 2020-02-24 12:00:42
 * @LastEditTime: 2020-02-24 12:02:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\pages\detail\loadable.js
 */
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('/'),
  loading() {
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent />