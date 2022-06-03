import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Nav, NavLink, NavMenu }
    from "./NavBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStle>
            About
          </NavLink>
          <NavLink to="/contact" activeStle>
            Contact
          </NavLink>
          <NavLink to="/gallery" activeStle>
            Gallery
          </NavLink>
          <NavLink to="/prices" activeStle>
            Prices
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
      
export default Navbar;
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
