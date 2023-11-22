import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

export default function FixedContainer() {
  return (
    <React.Fragment>
      
      <Grid Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width:"100%", position:"fixed"}} />
        </Grid>
    </React.Fragment>
  );
}