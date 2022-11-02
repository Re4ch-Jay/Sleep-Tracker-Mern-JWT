import React, {useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import {Link} from 'react-router-dom'
import useLogout from "../hooks/useLogout"
import { AuthContext } from '../context/AuthContextProvider';

function Navbar() {
  const {logout} = useLogout()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {user} = useContext(AuthContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AirlineSeatFlatIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sleep Tracker
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Typography textAlign="center">
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/feeds">
                    <Typography textAlign="center">
                      Feeds
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/about">
                    <Typography textAlign="center">
                      About
                    </Typography>
                  </Link>
                </MenuItem>
                {!user && <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/login">
                    <Typography textAlign="center">
                      Login
                    </Typography>
                  </Link>
                </MenuItem>}
                {!user &&
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/signup">
                    <Typography textAlign="center">
                      Signup
                    </Typography>
                  </Link>
                </MenuItem>}
                {user && <MenuItem onClick={handleCloseNavMenu}>
                  <Button onClick={logout}>
                    <Typography textAlign="center">
                      Logout
                    </Typography>
                  </Button>
                </MenuItem>}
  
            </Menu>
          </Box>
          <AirlineSeatFlatIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sleep Tracker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
                <Button
                  
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
            </Link>
            <Link to="/feeds">
                <Button
                 
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Feeds
                </Button>
            </Link>
            <Link to="/about">
                <Button
                 
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  About
                </Button>
            </Link>
            {!user && <Link to="/login">
                <Button
                 
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Login
                </Button>
            </Link>}
            {!user && <Link to="/signup">
                <Button
                 
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Signup
                </Button>
            </Link>}
             {user && <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={logout}
              >
                Logout
              </Button>}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
