import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Biblioteca
      </Typography>
      <Button color="inherit" component={Link} to="/">Inicio</Button>
      <Button color="inherit" component={Link} to="/users">Usuarios</Button>
      <Button color="inherit" component={Link} to="/books">Libros</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
