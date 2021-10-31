import React from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, Grid,Divider } from '@material-ui/core';
import BuyButton from '../components/buttons/BuyButton';
import { useAppContext } from '../context/AppContext';
import Countdown from 'react-countdown';

export default function RaffleCard(props) {
  let [state] = useAppContext()
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return 'Ready !';
    } else {
      // Render a countdown
      return <span>{hours}h {minutes}m {seconds}s</span>;
    }
  };
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
            <Countdown
              date={Date.now() + 11900000}
              renderer={renderer}
            />
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