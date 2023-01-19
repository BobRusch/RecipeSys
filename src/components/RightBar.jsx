import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import React, { useState } from 'react'

const RightBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box flex={2} p={1}  sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'  mt='75px' width={300}>
        <Typography variant='h6' fontWeight={300}>Online Friends</Typography>
        <AvatarGroup max={9}  spacing='01' >
          <Avatar src='https://1.gravatar.com/avatar/732a37d3c873bd54ac68a123603bc977' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
          <Avatar src='https://material-ui.com/static/images/avatar/1.jpg' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
          <Avatar src='https://material-ui.com/static/images/avatar/2.jpg' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
          <Avatar src='https://material-ui.com/static/images/avatar/4.jpg' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
          <Avatar src='https://material-ui.com/static/images/avatar/5.jpg' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)} />
          <Avatar src='https://material-ui.com/static/images/avatar/6.jpg' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
          <Avatar src='https://material-ui.com/static/images/avatar/7.jpg' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
          <Avatar src='https://material-ui.com/static/images/avatar/8.jpg' sx={{ height: 30, width: 30 }} onClick={(e) => setOpen(true)}/>
        </AvatarGroup>
        <Typography variant='h6' fontWeight={300} mt={2} mb={2}>Latest Posts</Typography>
        <ImageList cols={3} max={3} rowHeight={100} gap={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant='h6' fontWeight={300} mt={2} mb={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
];

export default RightBar