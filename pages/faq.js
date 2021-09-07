import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Main from '../components/Main';

import Header from '../components/Header';
import Footer from '../components/Footer';

import faq from '../guide/faq.md';

const posts = [faq];

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function HowItWork() {
  const classes = useStyles();

  const [glitch, setGlitch] = useState(true);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Frequently Asked Questions" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
