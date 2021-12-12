import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from "./pages/about-us";
import Signup from "./pages/signup";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import ActivateAccount from "./pages/activate-account";


function App() {
  return (
      <Router>
          <header>
          <Navbar/>
          <Routes>
              <Route  path="/" element={<Home/>} />
              <Route path="/about-us" element={<About/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/activate-account/:id" element={<ActivateAccount/>}/>
          </Routes>
          </header>
      </Router>
  );
}

export default App;
