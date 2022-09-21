import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoToNewClient = () => {
    navigate("/clients/new");
  }

  const handleGoToExerciseList = () => {
      handleClose();
  }


  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="fixed" >
        <Toolbar>

          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}
            onClick={ handleClick }
          >
              <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cardew's Planner
          </Typography>

          <Menu open={ open } onClose={ handleClose } anchorEl={ anchorEl }>
            <MenuItem onClick={ handleGoToNewClient }>Add a new client</MenuItem>
            <MenuItem onClick={ handleGoToExerciseList }>Manage exercise list</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuBar;
