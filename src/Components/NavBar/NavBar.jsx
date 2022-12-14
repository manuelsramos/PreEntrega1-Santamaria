import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';

import { CartWidget } from '../CartWidget/CartWidget';

import './NavBar.css';

export const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className={({ isActive }) => isActive ? 'navlink-brand' : 'navlink-ibrand'} to=''>
          PetPartner
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container">
            <div className='navlink-container'>
              <NavLink className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-inactive'} to="/category/dogs">Dogs</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-inactive'} to="/category/cats">Cats</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-inactive'} to="/contact">Contact</NavLink>
            </div>
          </Nav>
          <Nav>
            <NavLink className="item-count">
              0
            </NavLink>
            <NavLink className="cart-widget">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}