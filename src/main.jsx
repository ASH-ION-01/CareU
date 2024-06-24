import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Navbar from './Pages/Navbar.jsx'
// import PlayerComponent from './Components/PlayerComponent.jsx'
// import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <PlayerComponent /> */}
    <App />
    {/* <Toaster/> */}
    {/* <Navbar/> */}
    
  </BrowserRouter>
);
