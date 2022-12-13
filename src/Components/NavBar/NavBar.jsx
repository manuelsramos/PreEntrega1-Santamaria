import { Link, NavLink, } from 'react-router-dom'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className={({ isActive }) => isActive ? '' : ''} to='' >PetBuddy</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/category/dogs">Dogs</NavLink>
            <NavLink to="/category/cats">Cats</NavLink>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Row> <Col>0</Col> <Col><CartWidget /></Col> </Row>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
