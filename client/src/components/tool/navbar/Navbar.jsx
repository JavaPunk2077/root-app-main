import React from 'react'
import './Navbar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Root from '../../../assets/Root.png'

const Navbar = () => {
  const token = localStorage.getItem('token')

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();; 
    window.location.href = '/login'
  };
 
  if(token){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/">
                <img src={Root} className='navpic'/>
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
              <Stack spacing={2} direction="row"  >
              <IconButton size="large" color="inherit" onClick={(e) => logout(e)}>
                <LogoutIcon/>
              </IconButton>
              <Typography variant="div" component="div">
              </Typography>
              </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
  else{
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/">
                <img src={Root} className='navpic'/>
              </Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
              <Stack spacing={2} direction="row"  >
                <Link to="/onBoard"><Button variant="contained" size='small' color='primary'>Sign In</Button></Link>
                <Link to="/login"><Button variant="contained" size='small' color='success'>Log In</Button></Link>
              </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }

}

export default Navbar