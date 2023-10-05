import './App.css';

import MainNavbar from './components/MainNavbar';
import SubNavbar from './components/SubNavbar';
import TopNavbar from './components/TopNavbar';
import ScrollToTop from "react-scroll-to-top";
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Page/About';
import Footer from './components/Footer';
import Contact from './Page/Contact';
import Medicine from './Page/Medicine';


function App() {
  return (
    <main className="app">
      <nav className='navbar-all'>
        <TopNavbar />
        <MainNavbar />
        <SubNavbar />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/medicine' element={<Medicine />} />
      </Routes>
      <ScrollToTop smooth />
      <Footer />
    </main>
  );
}

export default App;
