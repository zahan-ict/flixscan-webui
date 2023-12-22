import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/common/Sidebar'
import Dashboard from './components/pages/Dashboard';
import Organization from './components/pages/Organization';

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
      
      </Routes>
    </Sidebar>
  </BrowserRouter>
   
  );
}

export default App;
