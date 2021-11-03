import React, { useState ,useEffect } from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, CardMedia, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppContext } from '../context/AppContext';
import ClaimPriceButton from './buttons/ClaimPrice';

export default function ArtCard() {

  const [ state, setState ] = useAppContext();

  const previousBatch = () => {
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
  
  const enableNextBatch = () => {
    if(!state.connected || (state.latestBatch == (state.batchOnDisplayIndex + 1))) return true
    else return false
  }
  
  const enablePreviousBatch = () => {
    if(!state.connected || (state.batchOnDisplayIndex == 0)) return true
    else return false
  }

  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography color="primary" variant="h6" gutterBottom>
              Tree ~ {state.connected ? state.batchOnDisplayIndex + 1: '' }
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={previousBatch} disabled={enablePreviousBatch()}>
              <ArrowBackIosIcon/>
            </Button>
            <Button onClick={nextBatch} disabled={enableNextBatch()}>
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
        <CardActions>
          <ClaimPriceButton/>
        </CardActions>
      </CardContent>
    </Card>
  );
}