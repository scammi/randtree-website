import React from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, Grid,Divider } from '@material-ui/core';
import BuyButton from '../components/buttons/BuyButton';
import { useAppContext } from '../context/AppContext';

export default function RaffleCard(props) {
  let [state] = useAppContext()

  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container justifyContent="flex-start">
          <Grid item>
            <Typography variant="h6">
              Oct 29 2021
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-evenly" style={{padding:"20px"}}>
          <Grid item xs={3}>
            <Typography>
              Participants
            </Typography>
            <Typography variant="h4">
              98
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem/>
          <Grid item>
            <Typography>
              Ends in
            </Typography>
            <Typography variant="h4">
             3h 30m 47s
            </Typography>
          </Grid>
        </Grid>
        <CardActions>
          <BuyButton contract={state.raffleContract}/>
        </CardActions>
      </CardContent>
    </Card>
  );
}