import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'

export const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
