import React, { Component } from 'react'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/* <Route  path='/home'>
                            <Home/>
                        </Route> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}
