import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function MyNavLink(props) {
    const route_tail = props.name.match(/[A-Z][a-z]*/g).join('-').toLowerCase();
    const content = (!props.button || props.dropdown) ? <Nav.Link href={`/${route_tail}`} className={`my-nav-link ${props.dropdown ? "is-dropdown-link" : "is-main-nav-link"}`}>{props.name}</Nav.Link> : 
                                     (
                                      <Nav.Link href={`/${route_tail}`}>
                                        <Button variant="outline-primary" className={`my-nav-button ${props.dropdown ? "is-dropdown-link" : "is-main-nav-link"}`}>{props.name}</Button>
                                      </Nav.Link>
                                     );

    return (
        <Nav.Item as="li">
            {content}
        </Nav.Item>
    )
}

export default MyNavLink;