import React from 'react';
import { render } from 'react-dom';
import './style.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Person from './components/Person';

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
        <Route path="/products/:kategorie/:id" element={ <Detail /> } />

        <Route path="/contact" element={ <Contact /> } />
        <Route path="/person/:personid" element={ <Person /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
