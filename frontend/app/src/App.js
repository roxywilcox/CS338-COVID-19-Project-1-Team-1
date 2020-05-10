import React, { useState, Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
// import { connect } from 'react-redux';
import { Nav, Navbar, Container, Row, Col, Card } from 'react-bootstrap';
import header_img from "./header.jpeg"

import './App.css';

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Container fluid className="header-image-style">
      {/* <Image className="header-style" src={header_img} fluid /> */}
      <Card className="text-center transparent-0 header-text">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title as="h1" >Covid-19</Card.Title>
          <Card.Text as="h3">
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Container fluid>
        <Navbar className="transparent-40" variant="light" style={{ width: 800 }}>
          {/* <Navbar.Brand href="#home">COVID-19</Navbar.Brand> */}
          <Nav justify variant="tabs" as="h5" defaultActiveKey="/home">
            <Nav.Link href="/home">Tab1</Nav.Link>
            <Nav.Link href="#features">Tab2</Nav.Link>
            <Nav.Link href="#pricing">Tab3</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Container>
  );
}

const App = () => (
    <NavDropdownExample />
);

export default App;
