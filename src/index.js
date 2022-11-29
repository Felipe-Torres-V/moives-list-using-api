import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MoviesInfo from './Components/Movies-Info/MoviesInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/MoviesInfo/:id' element={<MoviesInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
