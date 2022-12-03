import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import OutlinedCard from '../atoms/Card.tsx'
import ButtonGroup from '../atoms/ButtonGroup.tsx'
import Slide from '@mui/material/Slide';
import CreditCardTable from '../atoms/CreditCardTable.tsx'


export default function Home() {
  const creditCards = ["chase_reserve", "citi_premier"]
  const [view, setView] = useState("gridView")

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
          <ButtonGroup stateChanger={setView} />
        </Toolbar>
      </AppBar>
      {view == "gridView" &&
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Grid container spacing={3}>
        <Grid style={{marginTop: '10px', marginLeft: '10px'}} 
        item xs={4}>
        <OutlinedCard 
        name={"Chase Sapphire Reserve"}
        image={"/test.png"}
        current={60000}
        standard={60000}
        ></OutlinedCard>
        </Grid>
        <Grid style={{marginTop: '10px', marginLeft: '10px'}} 
        item xs={4}>
        <OutlinedCard 
        name={"Citi Premier"} 
        image={"/citi_premier.png"}
        current={80000}
        standard={60000}
        />
        </Grid>
        <Grid style={{marginTop: '10px', marginLeft: '10px'}} 
        item xs={4}>
        <OutlinedCard 
        name={"American Express Platinum"} 
        image={"/amex_platinum.png"}
        current={150000}
        standard={80000}
        />
        </Grid>
      </Grid>
      </Slide>}
      {view == "tableView" &&
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div>Table</div>
      </Slide>}
    </Box>
  )
}
