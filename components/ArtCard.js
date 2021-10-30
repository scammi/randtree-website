import React from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, CardMedia } from '@material-ui/core';

export default function ArtCard(props) {
  const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );
  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Tree ~ {props.currentBatch}
        </Typography>
        <CardMedia
        component="img"
        alt=""
        height="400"
        image="https://art.pixilart.com/63ed34defd26a14.png"
      />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}