import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import GrassIcon from '@mui/icons-material/Grass';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HeaderAppBar(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    auth.signOut().then(function() {
      navigate('/')
    }).catch(function(error) {
      console.log(error)
    });
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenu1 = () => {
    navigate('/Form1')
    setAnchorElNav(null);
  };
  const handleCloseNavMenu2 = () => {
    navigate('/Form2')
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box >
      <AppBar 
        sx={{
          width: '100vw',
          backgroundColor: '#134455'
        }}  
        variant='outlined'
      >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex'}}}
          >
            <GrassIcon />
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex'} }}>
              TEACHFORINDIA
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
                <MenuItem onClick={handleCloseNavMenu1}>
                  <Typography textAlign="center">
                      Form1
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu2}>
                    <Typography  textAlign="center">Form2</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Link sx={{textDecoration: 'none', color: 'white'}}  to='/Form1'><Button sx={{textDecoration: 'none', color: 'white', display: { xs: 'none', md: 'flex'}}}>Form1</Button></Link>
          <Link sx={{textDecoration: 'none', color: 'white'}}  to='/Form2'><Button sx={{textDecoration: 'none', color: 'white', display: { xs: 'none', md: 'flex'}}}>Form2</Button></Link>
          <Button sx={{
            color: 'white'
          }}> 
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2,color: 'white',gap:'1rem'}}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              >
              {props.name ? `${props.name}` : 'LOGIN'}
              <AccountCircleIcon />
            </IconButton>
          </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </Toolbar>
        </AppBar>
        </Box>
  );
}
