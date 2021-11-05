import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Main from '../components/Main';

import Header from '../components/Header';
import Footer from '../components/Footer';

import about from '../guide/about.md';

const posts = [about];

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function HowItWork() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="About" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
