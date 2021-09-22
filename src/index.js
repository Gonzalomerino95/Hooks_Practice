import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContextProvider from "./contexts/ThemeContext.jsx"



ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
