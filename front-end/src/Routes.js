import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./components/login"
import Signup from "./components/signup"
import Dashboard from "./components/dashboard"
import MyBooks from "./components/myBooks"
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/MyBooks" component={MyBooks} />
                </Switch>
            </Router>
        )
    }
}