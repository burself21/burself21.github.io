import React, { useState, useLayoutEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {NavDropdown as Dropdown} from 'react-bootstrap/NavDropdown';
import MyNavLink from '../Components/MyNavLink';

function useWindowWidth() {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      function updateWidth() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return width;
}

function MyNavbar2(props) {
    // const [x, setX] = useState(val1);
    // setX(val2);
    const [expanded, setExpanded] = useState(false);
    const [displayNav, setNavDisplay] = useState(true);
    const width = useWindowWidth();

    function overrideToggle() {
        console.log("Toggle triggered.");
        setExpanded(prevExpanded => !prevExpanded);
    }


    return (
      <Navbar 
        className="navbar" 
        expand="lg" 
        expanded={expanded}
        onToggle={overrideToggle}
        id="outer-navbar">
        <Container fluid id="nav-container">
            
                <Col xs sm md lg xl={{span: "auto"}}>
                    <Navbar.Brand href="/" id="my-nav-brand">Nathan Johns</Navbar.Brand>
                </Col>
                <Col xs sm md lg xl={{ span: "auto" }} className="mr-auto my-nav-toggler">
                    <Navbar.Toggle aria-controls="alt-nav" data-toggle="collapse" data-target="#alt-nav" aria-expanded="false" aria-label="Toggle navbar">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                </Col>
                <Col xs sm md lg xl={{ span: "auto" }}>
                    <Navbar.Collapse id="alt-nav">
                        {/*}
                        <Nav.Link href="/" active={true} className="is-nav-link">Home <span className="sr-only">(current)</span></Nav.Link>


                        <Nav.Link href="/other-projects" active={false} className="is-nav-link">Other Projects</Nav.Link>


                        <Nav.Link href="/contact-me" active={false} className="is-nav-link">Contact Me</Nav.Link>
                        */}
                        <Nav 
                        className="mr-auto" /*
                        id="main-nav"
                        navbar={true} */
                        defaultActiveKey="/"
                        as="ul"
                        >

                            <MyNavLink 
                                button={false}
                                name="Home"
                                dropdown={expanded}
                            />
                            <MyNavLink 
                                button={false}
                                name="Other Projects"
                                dropdown={expanded}
                            />
                            <MyNavLink 
                                button={true}
                                name="Contact Me"
                                dropdown={expanded}
                            />

                        </Nav>
                    </Navbar.Collapse>                
                </Col>
            
        </Container>
      </Navbar>

    );
  }
  
  export default MyNavbar2;