import React from 'react';
import { Navbar } from "react-bootstrap";
import Logo from './shopicon.svg';

const NavBar = () => {
  return (
    <Navbar className="bg-primary justify-content-between" expand="lg">
      <Navbar.Brand className="text-light d-flex align-items-center" href="#home">
        <img alt="icon" src={Logo} width="40" height="40" className="d-inline-block align-top mr-3"/>
        {' Seller Center '}
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-black">
          Signed in as: <a href="#!" className="text-light">Onur İltan</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
