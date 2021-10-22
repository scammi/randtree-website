import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import WhiteTextTypography from '../components/WhiteTextTypography';

import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  paragraph: {
    marginTop: theme.spacing(5),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '400px',
    backgroundColor: theme.palette.background.default,
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2];

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Container maxWidth="md" style={{marginTop:"50px"}}>

          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              <WhiteTextTypography component="h3" variant="h3" align="left" color="textPrimary">
                rLOOT
              </WhiteTextTypography>
              <WhiteTextTypography variant="h6" align="left" color="textSecondary" gutterBottom>
                random loot minting system
              </WhiteTextTypography>
            </Grid>
            <Grid item>
              <Button variant="contained"> Connect </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Button variant="contained">Buy ticket</Button>
            </Grid>
            <Grid item xs={2}>
              <Chip label="Current raffle  0" variant="outlined"/>
            </Grid>
          </Grid>


        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
