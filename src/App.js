import './App.css';

import MainNavbar from './components/MainNavbar';
import SubNavbar from './components/SubNavbar';
import TopNavbar from './components/TopNavbar';
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ScrollToTop from "react-scroll-to-top";



function App() {
  return (
    <main className="app">
      <TopNavbar />
      <MainNavbar />
      <SubNavbar />
        <ScrollToTop smooth />
    </main>





  );
}

export default App;
