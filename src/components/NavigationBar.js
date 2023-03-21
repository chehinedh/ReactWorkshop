import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavigationBar() {
  const active = {
    textDecoration: "none",
  };
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#" to="/products">
            My Store{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="products" style={({isActive}) => !isActive?active:undefined}>
              Products
            </NavLink>
            <NavLink to="Testingit" style={({isActive}) => !isActive?active:undefined}>Test</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
