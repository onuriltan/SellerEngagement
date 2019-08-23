import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Logo from './shopicon.svg'
const NavBar = () => {
  return (
    <Navbar className="bg-primary justify-content-between" expand="lg">
      <Navbar.Brand className="text-light d-flex align-items-center" href="#home">
        <img alt="icon" src={Logo} width="40" height="40" className="d-inline-block align-top mr-3"/>
        {' Seller Center '}
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">


      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
