import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import img from "../assets/p-logo.png";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0 navbar-border-bottom" sticky="top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={img} alt="" className="logo"/>
          <h4 className="logo-name">ROFINDER</h4>
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  How it Works
                </a>
              </li>
            </ul>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex me-3">
            <div className="custom-search-bar input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="border-0"
              />
            </div>
          </Form>

          {/* Login and Sign Up Buttons */}
          <Nav>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Log In
              </a>
            </li>
            <Button className=" signup-button ">
              Sign up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
