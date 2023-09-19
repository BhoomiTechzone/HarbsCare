import React from 'react';
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";

const MainNavbar = () => {
  return (
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">HurbsCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <InputGroup className="m-3">
            <SearchIcon />
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              <SearchIcon />
              Button
            </Button>
          </InputGroup>
        </Navbar.Collapse>
          <Nav>
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
      </Container>
     </Navbar>
  )
}

export default MainNavbar;





