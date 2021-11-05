import React from "react";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import BuyButton from "../components/buttons/BuyButton";
import { useAppContext } from "../context/AppContext";
import Countdown from "react-countdown";
import ProcessBatchButton from "./buttons/ProcessBatchButton";

export default function RaffleCard(props) {
  let [state] = useAppContext();
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "Ready !";
    } else {
      // Render a countdown
      return (
        <span>
          {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  let cardContent;
  if (state.latestBatch == state.batchOnDisplayIndex + 1 || !state.connected) {
    cardContent = (
      <>
        <Grid
          container
          justifyContent="flex-start"
          style={{ minWidth: "400px" }}
        >
          <Grid item>
            <Typography variant="h6">Oct 29 2021</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          style={{ padding: "20px" }}
        >
          <Grid item xs={3}>
            <Typography>Participants</Typography>
            <Typography variant="h4">98</Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item>
            <Typography>Ends in</Typography>
            <Typography variant="h4">
              <Countdown date={Date.now() + 11900000} renderer={renderer} />
            </Typography>
          </Grid>
        </Grid>
        <CardActions>
          <BuyButton contract={state.raffleContract} />
          <ProcessBatchButton />
        </CardActions>
      </>
    );
  } else {
    cardContent = (
      <>
        <Grid container justifyContent="flex-start">
          <Grid item>
            <Typography variant="h6">Oct 23 2021</Typography>
          </Grid>
        </Grid>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 5 }}
            width={{ xs: "auto", sm: "auto" }}
            justifyContent="center"
          >
            <Grid item>
              <Typography>Winner</Typography>
              <Typography variant="caption">
                {state.batches[state.batchOnDisplayIndex]?.winner}
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
              <Typography>Participants</Typography>
              <Typography variant="h5">98</Typography>
            </Grid>
          </Stack>
      </>
    );
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{cardContent}</CardContent>
    </Card>
  );
}
