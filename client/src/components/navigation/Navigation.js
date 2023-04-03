import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

import "./navigation.css";
import logo from "./img/logo.png";

import {motion} from 'framer-motion';

export default function Navigation() {
  


  return (
      <Navbar className='navbar w-100 fixed-top' expand="md" id='navbar'>
      <Container>
        <Navbar.Brand href='/home'>
          <motion.img
            src={logo}
            alt="success nat logo"
            className='logo justify-content-start' 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-100">
            <Nav.Link className='nav-link' href="home">Home</Nav.Link>
            <Nav.Link className='nav-link' href="about">About</Nav.Link>
            <Nav.Link className='nav-link' href="location">Location</Nav.Link>
            <Nav.Link className='nav-link' href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}