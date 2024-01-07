import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {Dashboard, CorporateFare, Storefront, CalendarViewMonth, SelectAll, ViewInAr, LocalFlorist, 
    PeopleAlt, ManageAccounts, Handyman
} from '@mui/icons-material';
import Header from './Header';
import Sidebar from './Sidebar';

const Main = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);


  const handleLogout = () => {
    setLoggedIn(false);
    console.log(localStorage.getItem('isLoggedIn', isLoggedIn));
    localStorage.removeItem('isLoggedIn');
  };

  const [open, setOpen] = React.useState(false);

  const menuItem = [
    {
        path: "/",
        name: "Dashboard",
        icon: <Dashboard />
    },
    {
        path: "/organization",
        name: "Organization",
        icon: <CorporateFare />
    },
    {
        path: "/store",
        name: "Store",
        icon: <Storefront />
    },
    {
        path: "/rack",
        name: "Rack",
        icon: <CalendarViewMonth />
    },
    {
        path: "/area",
        name: "Area",
        icon: <SelectAll />
    },
    {
        path: "/template",
        name: "Templates",
        icon: <LocalFlorist />
    },
    {
        path: "/product",
        name: "Product",
        icon: <ViewInAr />
    },
    {
        path: "/user",
        name: "User",
        icon: <PeopleAlt />
    },
    {
        path: "/role",
        name: "User Role",
        icon: <ManageAccounts />
    },
    {
        path: "/setting",
        name: "Setting",
        icon: <Handyman />
    }
]

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header handleLogout={handleLogout} />
      <Box sx={{ display: 'flex', backgroundColor: '#f1f1f1', height: '100vh', overflow: 'auto', m: -1 }}> 
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} menuItem={menuItem} />
      <Box component="main" sx={{ flexGrow: 1, p: 5, mt: 10 }}>
        {children}
      </Box>
      </Box>
    </>
  );
};

export default Main;
