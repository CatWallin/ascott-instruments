import './App.css';

import Navbar from './Navbar.js';
import Footer from "./Footer.js";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Prices from './pages/prices';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/prices' element={<Prices/>} />
          <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
