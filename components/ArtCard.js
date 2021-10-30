import React from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, CardMedia, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function ArtCard(props) {

  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography color="primary" variant="h6" gutterBottom>
              Tree ~ {props.currentBatch}
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