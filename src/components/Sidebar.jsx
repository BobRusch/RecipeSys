import React from 'react';
import { Article, Group, Home, ModeNight, Person, Settings, Store } from '@mui/icons-material';
import { Avatar, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box  flex={1} sx={{ height: '86vh', display: { xs: 'none', sm: 'block' } }} >
      <Box position='fixed' > 
        <List>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary='All Todos' />
              </ListItemButton>
          </ListItem>
        </List>
              <List>
            <ListItem disablePadding>
              <ListItemButton component='b' href='#home'>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary='Pages'/>
              </ListItemButton>
          </ListItem>
        </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton component='c' href='#home'>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary='Groups' />
              </ListItemButton>
          </ListItem>
        </List>
              <List>
            <ListItem disablePadding>
              <ListItemButton component='d' href='#home'>
                <ListItemIcon>
                  <Store />
                </ListItemIcon>
                <ListItemText primary='Marketplace' />
              </ListItemButton>
          </ListItem>
        </List>
              <List>
            <ListItem disablePadding>
              <ListItemButton component='e' href='#home'>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary='Friends' />
              </ListItemButton>
          </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton component='f' href='#home'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='g' href='#home'>
              <ListItemIcon>
                <Avatar
                  src='https://1.gravatar.com/avatar/732a37d3c873bd54ac68a123603bc977'
                  sx={{ height: 30, width: 30 }}
                />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='g' href='#home'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar