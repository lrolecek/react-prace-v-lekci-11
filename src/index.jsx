import React from 'react';
import { render } from 'react-dom';
import './style.css';

import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <h1>Práce v lekci 11</h1>
      <About />
    </>
  );
}

render(<App />, document.querySelector('#app'));
