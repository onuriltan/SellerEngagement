import React from 'react';
import { Navbar } from "react-bootstrap";
import Logo from './shopicon.svg';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar className="bg-primary justify-content-between" expand="lg">
      <Link to="/">
        <Navbar.Brand className="text-light d-flex align-items-center" style={{textDecoration:'none'}}>
          <img alt="icon" src={Logo} width="40" height="40" className="d-inline-block align-top mr-3"/>
          <div>Seller Center</div>
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-black">
          Signed in as: <a href="#!" className="text-light">Onur İltan</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
