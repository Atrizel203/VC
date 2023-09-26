// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'grey' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{textAlign: 'center' , flexGrow: 1, color: 'gold' }}>
          Mi Currículum
        </Typography>
        <Box sx={{ '& > :not(style)': { m: 1, color: 'white' } }}>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
