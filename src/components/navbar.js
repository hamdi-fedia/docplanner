import React from 'react'
import style from '../css/style.css'
import {Navbar,Nav,NavDropdown } from 'react-bootstrap'
function Navbarsite(){
    return ( 
      <Navbar  expand="lg">
      <div className="container">
      <Navbar.Brand href="#home">
        <img src="img/logo.svg" className="logo" ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="active">About us</Nav.Link>
          <Nav.Link href="#link">Career</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Marketing &amp; PR</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Customer Success &amp; Sales</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">IT, Product, Data</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Finance &amp; Administration</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">HR &amp; more</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
      )
}

export default Navbarsite
