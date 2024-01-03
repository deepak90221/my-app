import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const pages = [
  'Home',
  'Contactus',
  'Counsollor',
  'Login',
  'Students',
  'Visitor',
  'Parents',
  'Appointment',
  'Filter',
  'Track',
  'Register',
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Adjust the primary color as needed
    },
    background: {
      default: '#ffffff', // Adjust the background color as needed
    },
  },
});

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{
        //backgroundImage: `url('https://th.bing.com/th?id=OIP.spN9KjRF6ou5mCORGr4HxwAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Times roman',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white', // Adjust the text color as needed
              textDecoration: 'none',
            }}
          >
            CVMS
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              sx={{
                mr: 2,
                width: '200px',
                backgroundColor: 'white',
                borderRadius: '4px',
                '& input': {
                  padding: '8px', // Adjust the padding as needed
                },
              }}
            />

            {pages.map((page) => (
              page === 'Register' ? (
                <React.Fragment key={page}>
                  <Button
                    aria-controls="register-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    sx={{ mx: 1, color: 'white', textDecoration: 'none' }}
                  >
                    {page}
                  </Button>
                  <Menu
                    id="register-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose} component={Link} to="/register-student">Register Student</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/register-parent">Register Parent</MenuItem>
                    {/* Add more menu items as needed */}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  sx={{ mx: 1, color: 'white', textDecoration: 'none' }}
                >
                  {page}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
