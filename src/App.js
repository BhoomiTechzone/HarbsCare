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
import Home from './components/Home';
import About from './Page/About';



function App() {
  return (
    <main className="app">
      <nav className='navbar-all'>
        <TopNavbar />
        <MainNavbar />
        <SubNavbar />
      </nav>
      <Home/>
     
        <ScrollToTop smooth />
    </main>

    

  );
}

export default App;
