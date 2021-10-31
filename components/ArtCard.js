import React from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, CardMedia, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppContext } from '../context/AppContext';

export default function ArtCard() {

  const [ state ] = useAppContext();

  async function queryRaffles() {
    const version = '0.2.4'
    const response = await fetch(`https://api.studio.thegraph.com/query/6834/piedras/${version}`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          raffleBatches {
            id
            batchId
            winner
            claimed
            processed
          }
        }`
      }),
      headers: {
          'content-type': 'application/json'
      }
    })
    
    const {data} = await response.json();

    console.log("raffles: ", data)

    return data;
  }

  queryRaffles()

  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography color="primary" variant="h6" gutterBottom>
              Tree ~ {state.latestBatch}
            </Typography>
          </Grid>
          <Grid item>
            <ArrowBackIosIcon/>
            <ArrowForwardIosIcon/>
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