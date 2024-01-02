import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/common/Sidebar'
import Dashboard from './components/pages/Dashboard';
import Organization from './components/pages/Organization';
import Store from './components/pages/Store';
import Rack from './components/pages/Rack';
import Area from './components/pages/Area';
import Template from './components/pages/Template';
import Product from './components/pages/Product';
import User from './components/pages/User';
import Login from './components/pages/Auth/Login';
import "./style.css"


const App = () => {
  // Check if there is a value in local storage for 'isLoggedIn'
  const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setLoggedIn] = useState(initialLoggedInState);

   // Update local storage whenever the state changes
   useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    // Set the isLoggedIn state to true upon successful login
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate a logout action
    setLoggedIn(false);
    // Remove the login status from localStorage
    localStorage.removeItem('isLoggedIn');
  };
  
  return (
    <BrowserRouter>
      {isLoggedIn ? (<Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/store" element={<Store />} />
          <Route path="/rack" element={<Rack />} />
          <Route path="/area" element={<Area />} />
          <Route path="/template" element={<Template />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Sidebar>) : (<Routes>
        <Route>
          <Route path="/" element={<Login  onLogin={handleLogin}/>} />
        </Route>
      </Routes>)}
    </BrowserRouter>
  );
}

export default App;
