import React, { useState, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Button} from '@material-ui/core';

import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import ArtCard from '../components/ArtCard';
import RaffleCard from '../components/RaffleCard';

export default function Index() {
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <main>
        <Container maxWidth="md" style={{marginTop:"40px"}}>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ArtCard/>
            </Grid>
            <Grid item xs={6}>
              <RaffleCard/>
            </Grid>
          </Grid>

        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
