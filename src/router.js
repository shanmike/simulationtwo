import React from 'react';
import ViewOne from './components/views/ViewOne/ViewOne'
import ViewTwo from './components/views/ViewTwo/ViewTwo'

import Login from './components/login/Login'
import Home from './components/home/Home'

import {HashRouter, Route} from 'react-router-dom'

export default(
    <HashRouter>
        <div>
            <Route exact path = '/' component={Home}/>
            <Route path = '/vOne' component={ViewOne}/>
            <Route path = '/vTwo' component={ViewTwo}/>
        </div>
    </HashRouter>
)