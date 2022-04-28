import React from 'react';
import { render } from 'react-dom';
import './style.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Práce v lekci 11</h1>

      <nav>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
        |
        <Link to="/products">Products</Link>
        |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
