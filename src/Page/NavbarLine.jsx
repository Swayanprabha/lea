import React from 'react'
import zomatologo from '../assets/logo11.png';
import { Nav, Navbar, Container, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import brand from '../assets/logo13.png'

function NavbarLine() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home"><img src={brand} style={{ width: "2rem", position: "relative", left: "1%" }} alt="" /></Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to="/" style={{margin:5,textDecoration:"none",color:"white",fontSize:"20px"}}>Home</NavLink>
              <NavLink to="/Search" style={{margin:5,textDecoration:"none",color:"white",fontSize:"20px"}}>Explore</NavLink>
              <NavLink to="/Review" style={{margin:5,textDecoration:"none",color:"white",fontSize:"20px"}}>AboutUs</NavLink>
            </Nav>
            <Navbar.Brand href="/Account"><img src={zomatologo} style={{ width: "2rem", position: "relative", right: "1%" }} alt="" /></Navbar.Brand>
          </Container>
        </Navbar>
      </div>
  )
}

export default NavbarLine