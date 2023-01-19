import * as React from 'react';
import { Box } from '@mui/material';

import Post from './Post';

export default function Feed() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
