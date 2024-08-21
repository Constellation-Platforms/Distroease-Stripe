import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function Navigation() {

  return (
    <div>
      <Navbar expand="lg" id="navbar" className="flex justify-between items-center p-4">
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: '20px' }} className="flex items-center gap-2">
          <img
            alt="Distroease Logo"
            src={"/images/Logo.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <strong>Distroease</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex justify-end items-center gap-8">
  <Nav className="flex items-center gap-9">
    <Nav.Link as={Link} to="#" className="text-[#0d151c] text-sm font-medium leading-normal">Pricing</Nav.Link>
    <Nav.Link as={Link} to="#" className="text-[#0d151c] text-sm font-medium leading-normal">Community</Nav.Link>
    <Nav.Link as={Link} to="#" className="text-[#0d151c] text-sm font-medium leading-normal">Help</Nav.Link>
    <Nav.Link as={Link} to="#" className="text-[#0d151c] text-sm font-medium leading-normal">Customers</Nav.Link>
    <Nav.Link as={Link} to="#" className="text-[#0d151c] text-sm font-medium leading-normal">Announcements</Nav.Link>
  </Nav>
</Navbar.Collapse>

      </Navbar>
    </div>
  );
}

export default Navigation;
