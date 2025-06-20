import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import Nav from './landing_page/Nav';
import Footer from './landing_page/Footer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Nav/>
  <App/>
  <Footer/>
  </BrowserRouter>
  
);
