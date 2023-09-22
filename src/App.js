import './App.css';

import MainNavbar from './components/MainNavbar';
import SubNavbar from './components/SubNavbar';
import TopNavbar from './components/TopNavbar';
import ScrollToTop from "react-scroll-to-top";
import Home from './components/Home';
import Footer from './components/Footer';



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
        <Footer />
    </main>

    

  );
}

export default App;
