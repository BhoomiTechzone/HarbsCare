import React from 'react';
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PersonIcon from '@mui/icons-material/Person';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import exo from '../Images/Exclusive Offers.gif';
import logo from '../Images/logo hc.png'
import "./Navbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainNavbar = () => {
  return (
    <div>
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <InputGroup className="m-3">
            <div className="svg">

            </div>
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="success" id="button-addon2">
              <SearchIcon />
              Button
            </Button>
          </InputGroup>
          <Nav className='abc'>
            <img src={exo} alt="" />
          </Nav>
          <Nav  >

            <div className='nav-cart'>
            <Nav.Link eventKey={2}>
              <ShoppingCartIcon /><span>Cart</span>
              </Nav.Link>
            </div>
            <div className='nav-cart'>
              <PersonIcon /><span>Login</span>
            </div>


          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar> */}
      <Navbar collapseOnSelect expand="lg" className="bg-body">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" height="60px" /></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <InputGroup className="mb-3 mt-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"

            />
            <Button variant="success" id="button-addon2">
              <SearchIcon />
              Button
            </Button>
          </InputGroup>
          <Nav className="me-auto">
            <div className="hide">
              <Nav.Link href="#features"><img src={exo} alt="" /></Nav.Link>
            </div>
          </Nav>
          <Nav className=''>
            <div className="hide">
              <Nav.Link href=""><ShoppingCartIcon /><span>Cart</span></Nav.Link>
            </div>
            <div className="hide">
              <Nav.Link eventKey={2} href="#memes">
                <PersonIcon /><span>Login</span>
              </Nav.Link>
            </div>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>

    </div>
  )
}

export default MainNavbar;





