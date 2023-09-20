import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Navbar.css";

const SubNavbar = () => {
  return (
    <nav className='subnavbar'>
      <ul className='d-flex' >
        <li>
          HOME
        </li>
        <li>
          BEAUTY
        </li>
        <li>
          HAIR
        </li>
        <li>
          FACE
        </li>
        <li>
          BODY
        </li>
        <li>
          BABY
        </li>
        <li>
          ABOUT
        </li>
        <li>
          CONTACT
        </li>
        <li>
          BLOG
        </li>
      </ul>  
    </nav> 
  )
}

export default SubNavbar;