import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import About from "./pages/about-us";
import Signup from "./pages/signup";
import MyNavbar from "./components/navbar";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import ActivateAccount from "./pages/activate-account";
import Footer from "./pages/footer";
import Dashboard from "./pages/dashboard";
import TransactionsReport from "./pages/transactions-report";
import useToken from "./helper/use-token"
import AdminNavbar from "./components/navbar/admin-navbar";
import AdminSidebar from "./components/sidebar/admin-sidebar";

function App() {
    const { token, setToken } = useToken();
    // console.log(token);
    if(!token){
        return (
            <Router>
                <header>
                    <MyNavbar/>
                    <Routes>
                        <Route  path="/" element={<Home/>} />
                        <Route path="/about-us" element={<About/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="/activate/:id" element={<ActivateAccount/>}/>
                        <Route path="/login" element={<Login setToken={setToken}/>}/>
                    </Routes>
                </header>
            </Router>
        )
    }
    return (
      <Router>
          <header/>
          <AdminSidebar/>
          <main className={"content"}>
          <AdminNavbar/>
          <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/transactions" element={<TransactionsReport/>}/>
          </Routes>
          </main>
          <Footer/>
      </Router>
  );
}

export default App;
