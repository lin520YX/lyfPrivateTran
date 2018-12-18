
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './containers/Home';
import Mime from './containers/Mime';
import Profile from './containers/Profile';
ReactDOM.render(
        <Router>
            <Route path='/' component={Home}></Route>
            <Route path='/mime' component={Mime}></Route>
            <Route path='/profile' component={Profile}></Route>
        </Router>
    ,document.querySelector('#root'))