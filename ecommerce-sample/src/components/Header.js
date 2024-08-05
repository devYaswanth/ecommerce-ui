import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem, Avatar, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const [userFirstInitial, setUserFirstLetter] = useState('');
  // to get first leetr of user
  useEffect(() => {
    // get user
    const user = localStorage.getItem('user');
    if (user) {
      const userInfo = JSON.parse(user);
      const username = userInfo.username || '';
      setUserFirstLetter(username.charAt(0).toUpperCase());
    }
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // login
  const handleLogin = () => {
    navigate("/login")
  }
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate("/login")
  }
  const open = Boolean(anchorEl);
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <IconButton
          onClick={handleMenuOpen}
          sx={{ ml: 1 }}
        >
          <Avatar sx={{ bgcolor: '#ffff', color: '#1976d2' }}>
            { userFirstInitial }
          </Avatar>
        </IconButton>
        <Paper>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem >Profile</MenuItem>
            {localStorage.getItem('user') ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={handleLogin}>Login</MenuItem>
            )}
          </Menu>
        </Paper>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
