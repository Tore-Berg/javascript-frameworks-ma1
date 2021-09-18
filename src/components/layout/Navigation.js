import React from 'react'
import { Navbar, Nav, Brand, Container } from 'react-bootstrap';
import Logo from '../assets/logo.png'

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><img src={Logo} className="logo" alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/" exact className="nav-link">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/my-portfolio" exact className="nav-link">Portfolio</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about" exact className="nav-link">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact" exact className="nav-link">Contact</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
