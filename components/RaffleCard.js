import React from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import BuyButton from '../components/buttons/BuyButton';

export default function RaffleCard(props) {

  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Raffle 
        </Typography>
        <Typography>
          Participants
        </Typography>
        <Typography>
          Ends in
        </Typography>
      </CardContent>
      <CardActions>
        <BuyButton contract={props.contract}/>
      </CardActions>
    </Card>
  );
}