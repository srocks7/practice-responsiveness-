import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export default class Navbara extends Component {
    render() {
        return (
            <div>
                <Navbar className="fixed-top" bg='light' expand="lg"  >
                <Navbar.Brand className='text-black' href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=' ml-auto abc' >
                    <Nav.Link  href="#home">Home</Nav.Link>
                    <Nav.Link  href="#link">About</Nav.Link>
                    <Nav.Link  href="#home">Portfolio</Nav.Link>
                    <Nav.Link  href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
