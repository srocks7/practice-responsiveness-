
import React, { Component } from 'react'
// import {Navbar,NavDropdown,Nav,Form,FormControl,Button,Carousel} from 'react-bootstrap'
import './App.css';
import Navbara from './components/Navbara';
import Carousels from './components/Carousels';
import SideBar from './components/SideBar';
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import {reactLocalStorage} from 'reactjs-localstorage';

export default class App extends Component {

    
  render() {
    var login =reactLocalStorage.get('login')
    return (
      <div className='App'>
        {login === 'true' ? <SideBar/> : <Login/>}
      </div>
    )
  }
}
