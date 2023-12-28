import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/common/Sidebar'
import Dashboard from './components/pages/Dashboard';
import Organization from './components/pages/Organization';
import Store  from './components/pages/Store';
import Rack  from './components/pages/Rack';
import Area  from './components/pages/Area';
import Template from './components/pages/Template';
import Product from './components/pages/Product';
import User from './components/pages/User';
import  "./style.css"


function App() {
  return (
    <BrowserRouter>
    {/* <Routes>
      <Route>
        <Route path="/" element={<SignIn />} />
      </Route>
    </Routes> */}
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organization" element={<Organization/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/rack" element={<Rack/>} />
        <Route path="/area" element={<Area/>} />
        <Route path="/template" element={<Template/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
   
  );
}

export default App;
