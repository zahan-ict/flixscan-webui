import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//list
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Drawer
import MuiDrawer from '@mui/material/Drawer';

//Icon
import IconButton from '@mui/material/IconButton';
import {
    Dashboard, CorporateFare, Storefront, CalendarViewMonth, SelectAll, ViewInAr, Menu,
    LocalFlorist, PeopleAlt, ManageAccounts, Handyman, ChevronLeft, Person, Logout
} from '@mui/icons-material';
//header appbar
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'

import Button from '@mui/material/Button';


const drawerWidth = 170;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',

})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const Sidebar = ({ children }) => {
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


    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f1f1f1', height: '100vh', overflow: 'auto', m: -1 }}>
            <AppBar position="fixed" elevation={1} sx={{ zIndex: 100, backgroundColor: '#fff', color: 'black' }} open={open}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Button color="inherit"><Person /></Button>
                    <Button color="inherit"><Logout /></Button>
                </Toolbar>
            </AppBar>
            {/* Open and close sidebar without <Appbar/> in the top. No need fuction  handleDrawerClose and handleDrawerOpen to close or open sidebar */}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(!open)}>
                        {open ? <ChevronLeft /> : <Menu />}
                    </IconButton>
                </DrawerHeader>

                <List>
                    {
                        menuItem.map((item, index) => (
                            <Link style={{ textDecoration: 'none', color: '#000' }} to={item.path} key={index} >
                                <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton sx={{ minHeight: 55, justifyContent: open ? 'initial' : 'center', px: 2.5,flexDirection: open ? 'row':'column'  }}>
                                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', fontSize: '.712rem' }} >{item.icon} </ListItemIcon>
                                        <Typography  sx={{ fontSize: open ? '15px' :'8px' }}>{item.name} </Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>
            </Drawer>

            {/* <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100]: theme.palette.grey[900],
            flexGrow: 100, height: '100vh', overflow: 'auto' }}> </Box> */}
            <Box component="main" sx={{ flexGrow: 1, p: 5, mt: 10 }}>
                {children}
            </Box>
        </Box>
    );
};

export default Sidebar;