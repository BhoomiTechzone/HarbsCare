import './App.css';
import MainNavbar from './components/MainNavbar';
import SubNavbar from './components/SubNavbar';
import TopNavbar from './components/TopNavbar';


function App() {
  return (
    <main className="app">
      <TopNavbar />
      <MainNavbar />
      <SubNavbar />
    </main>
  );
}

export default App;
