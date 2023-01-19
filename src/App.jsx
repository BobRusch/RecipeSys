import { useState } from 'react'
import { Box, Stack } from '@mui/material';

import './App.css'

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}

export default App
