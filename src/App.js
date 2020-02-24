/*
 * @Author: your name
 * @Date: 2020-02-22 11:21:14
 * @LastEditTime: 2020-02-24 11:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simple_book\src\App.js
 */
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/Write" exact component={Write} />
          <Route path="/detail/:id" exact component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
