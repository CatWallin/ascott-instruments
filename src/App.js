import './App.css';

import Navbar from './Navbar.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Header from "./Header";
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Prices from './pages/prices';

function App() {
  return (
    <Router>
    
    <Navbar />
    <div className="App">
      <Header />
    </div>
    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/prices' element={<Prices/>} />
    </Routes>
    </Router>
  );
}

export default App;
