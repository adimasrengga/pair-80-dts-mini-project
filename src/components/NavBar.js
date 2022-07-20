import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';

const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
signOut(auth).then(() => {
    navigate("/login");
  // Sign-out successful.
}).catch((error) => {
    console.log(error);
  // An error happened.
});
    
  };

  return (
    <Box>
      <AppBar position="static" sx={{display: 'flex'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: 'left'}}>
            Mood Meter
          </Typography>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;