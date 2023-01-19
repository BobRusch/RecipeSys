import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import React, {useState} from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0, 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display:'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display:'none'
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='fixed' margin='0'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          TodoSys (Design)
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search....' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail color='white' />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications color='white' />
          </Badge>
          <Avatar src='https://1.gravatar.com/avatar/732a37d3c873bd54ac68a123603bc977' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)} >
          <Avatar
            src='https://1.gravatar.com/avatar/732a37d3c873bd54ac68a123603bc977'
            sx={{ height: 30, width: 30 }}
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
