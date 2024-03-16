import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import AppRoutes from './pages/AppRouter';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <React.StrictMode>
      <AppRoutes /> 
    </React.StrictMode>
  </BrowserRouter>
);
