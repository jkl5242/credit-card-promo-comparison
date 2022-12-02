import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import OutlinedCard from '../atoms/Card.tsx'

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.text()
  return {
    props : { 
      data
    }
  }
}

export default function Home({data}) {
  console.log(data)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Credit Card Promo Compare
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
  <Grid style={{marginTop: '10px', marginLeft: '10px'}} 
  item xs={4}>
  <OutlinedCard></OutlinedCard>
  </Grid>
  <Grid style={{marginTop: '10px', marginLeft: '10px'}} 
  item xs={4}>
  <OutlinedCard></OutlinedCard>
  </Grid>
  <Grid style={{marginTop: '10px', marginLeft: '10px'}} 
  item xs={4}>
  <OutlinedCard></OutlinedCard>
  </Grid>
  
</Grid>
    </Box>
  )
}
