import React from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, CardMedia, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppContext } from '../context/AppContext';

export default function ArtCard(props) {

  const [ state, setState ] = useAppContext();

  const previusBatch = () => {
    setState((state) => ({
      ...state,
      batchOnDisplayIndex: state.batchOnDisplayIndex - 1 
    }))    
  }

  const nextBatch = () => {
    setState((state) => ({
      ...state,
      batchOnDisplayIndex: state.batchOnDisplayIndex + 1
    }))
  }

  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography color="primary" variant="h6" gutterBottom>
              Tree ~ {state.batchOnDisplayIndex ? state.batchOnDisplayIndex + 1: '' }
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={previusBatch} disabled={state.batchOnDisplayIndex == 0}>
              <ArrowBackIosIcon/>
            </Button>
            <Button onClick={nextBatch} disabled={state.latestBatch == (state.batchOnDisplayIndex + 1)}>
              <ArrowForwardIosIcon/>
            </Button>
          </Grid>
        </Grid>
        <CardMedia
        component="img"
        alt=""
        height="400"
        image="https://art.pixilart.com/63ed34defd26a14.png"
      />
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}