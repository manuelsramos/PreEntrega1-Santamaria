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
          Watched
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container">
            <div className='navlink-container'>
              <NavLink className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-inactive'} to="/category/men">Men</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-inactive'} to="/category/women">Women</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-inactive'} to="/contact">Contact</NavLink>
            </div>
          </Nav>
          <Nav className='container'>
            <NavLink className="item-count">

            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'navlink-active' : 'navlink-active'} to="/cart"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}