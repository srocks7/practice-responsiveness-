import React, { Component } from 'react'
import SideBar from '../components/SideBar';
import Login from './Login';
import Home from '../pages/Home'
import Reports from '../pages/Reports'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
export default class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* <Router>
                <Switch>
                    <Route exact path='/landingPage'>
                    <SideBar/>
                    </Route>
                </Switch>
            </Router> */}
            </div>
        )
    }
}
