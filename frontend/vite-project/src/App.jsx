import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/signin/signin.jsx';
import './utils/responsive.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard.jsx';

function App() {
  return(
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/signup' element = <Login/> ></Route>
      <Route path='/signup' element = <Login/> ></Route>
      <Route path='/dashboard' element = <Dashboard/> ></Route>

      
    </Routes>
    </BrowserRouter>
   
    </>
   
  );
}

export default App
