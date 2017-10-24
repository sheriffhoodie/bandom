import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.addElementById("root");
  ReactDOM.render(<h1>BANDOM</h1>, root);
});
