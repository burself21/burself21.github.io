import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavDropdown as Dropdown} from 'react-bootstrap/NavDropdown';


function MyNavbar(props) {
    // const [x, setX] = useState(val1);
    // setX(val2);
    return (
      <Navbar bg="dark" className="navbar-dark" expand="lg">

        <Navbar.Brand href="/">Nathan Johns</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" data-toggle="collapse" data-target="#main-nav" aria-expanded="false" aria-label="Toggle navbar">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="main-nav">
          <Nav 
              className="mr-auto"
              bg="dark" /*
              id="main-nav"
              navbar={true} */
              defaultActiveKey="/"
              as="ul"
          >
            
            <Nav.Item as="li">
              <Nav.Link href="/" active={true} className="is-nav-link">Home <span className="sr-only">(current)</span></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/other-projects" active={false} className="is-nav-link">Other Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/contact-me" active={false} className="is-nav-link">Contact Me</Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
  
  export default MyNavbar;