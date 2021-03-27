
import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { SidebarData } from './sidebarData';
import {reactLocalStorage} from 'reactjs-localstorage';
import {  Link } from "react-router-dom";
// import Routes from './Routes'
import Home from '../pages/Home'
import Reports from '../pages/Reports'
import Products from '../pages/Products'
import Team from '../pages/Team'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class SideBar extends Component {
    render() {
        return (
            <div>
              <Router>
                <Switch>         
                <div className='container-fluid '>
                  <div className='row justify-content-center'>
                  <button className='btn-warning btn m-2' onClick={()=>{
                        reactLocalStorage.set('login',false);
                        // var login=false
                          window.location='/'
                      }}>SignOut</button>
                  </div>
                
          <div className='container'>
          <div className="row">
            <div className="col-lg-3 mr-2 bg-warning justify-content-center" style={{borderRadius:'8px'}} >
            <Navbar expand="lg justify-content-center">
            <Navbar.Toggle className='text-white' style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav  ">
            
            <ul class="nav flex-column ">
            {SidebarData.map((item, index) => {
                        return (
                          <li key={index} className={item.cName}>
                            <Link className='nav-link' to={item.path}>
                              {/* {item.icon} */}
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        );
                      })}
            </ul>

            </Navbar.Collapse>
          </Navbar>
            </div>
                  <div className="col-lg-8 bg-primary text-white" style={{height:'90vh',borderRadius:'8px',textAlign:'center'}}>
                    
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/reports' component={Reports}/>
                            <Route exact path='/products' component={Products}/>
                            <Route exact path='/team' component={Team}/>
                            
                  </div>
                </div>
                </div>
                  </div>
            </Switch>
                </Router>
            </div>
        )
    }
}
