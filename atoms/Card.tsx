import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Chase Sapphire Reserve
      </Typography>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Image
      src="/test.png"
      alt="test" width="188" height="118"
      />
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
      <Typography>
        Current Promotion: 60,000
      </Typography>
      <Typography>
        Standard Promotion: 60,000
      </Typography>
      </div>
      </div>
    </CardContent>
  </React.Fragment>
);


const OutlinedCard = () => {
  return (
    <div>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </div>
  );
}

export default OutlinedCard;