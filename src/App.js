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
import Women from './Page/Women';
import HealthProblem from './Page/HealthProblem';
import Men from './Page/Men';
import Hair from './Page/Hair';


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
        <Route path='/women' element={<Women/>} />
        <Route path='/healthproblem' element={<HealthProblem/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/hair' element={<Hair/>} />
      </Routes>
      <ScrollToTop smooth />
      <Footer />
    </main>
  );
}

export default App;
