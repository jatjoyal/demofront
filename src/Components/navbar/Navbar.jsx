import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', color: 'white' }}>
            STUDY WORLD
          </Typography>
          <Button color="inherit">
            <Link to='/login' style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          </Button>
          <Button color="inherit">
            <Link to='/signup' style={{ color: 'white', textDecoration: 'none' }}>Signup</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
