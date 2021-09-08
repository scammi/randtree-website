import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typewriter from 'typewriter-effect';


import Portal from '../public/portal.gif';

import WhiteTextTypography from '../components/WhiteTextTypography';

import Header from '../components/Header';
import Link from '../components/Link';
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

  const [glitch, setGlitch] = useState(false);
  const [backwards, setBackwards] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <WhiteTextTypography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Upside Down Loot
            </WhiteTextTypography>
            <div className={classes.heroButtons}>
              <Grid container spacing={6} justifyContent="center">
                <Grid item>
                  <WhiteTextTypography variant="h6" color="textSecondary" align="center">
                    <Link color="inherit" href="https://opensea.io/collection/upside-down-loot" underline="hover">
                      OpenSea
                    </Link>
                  </WhiteTextTypography>
                </Grid>
                <Grid item>
                  <WhiteTextTypography variant="h6" color="textSecondary" align="center">
                    <Link color="inherit" href="https://twitter.com/UpsideDownLoot" underline="hover">
                      Twitter
                    </Link>{' '}
                  </WhiteTextTypography>
                </Grid>
                <Grid item>
                  <WhiteTextTypography variant="h6" color="textSecondary" align="center">
                    <Link color="inherit" href="https://etherscan.io/token/0x191dfb7e10f4c3a82b2c4f763d48744b6c7cf7ec#writeContract" underline="hover">
                      Contract
                    </Link>{' '}
                  </WhiteTextTypography>
                </Grid>
              </Grid>
            </div>
            <div className={classes.paragraph}>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={0} justifyContent="center">
            <Grid item xs={12} sm={8} md={8} className={classes.card} style={{ display: 'flex', alignItems: 'center' }} >
              <WhiteTextTypography variant="h6" align="center" color="textSecondary" paragraph
                {...(glitch ? { className: 'glitch' } : {})}
                {...(backwards ? { className: 'backwards' } : {})}
                data-text="Upside Down Loot is identical to Loot except the fact that it's the opposite.
              The laws that rule the elements are symmetrical to the ones that rule in Loot">
                <Typewriter

                  options={{
                    delay: 17
                  }}

                  onInit={(typewriter) => {
                    typewriter.typeString(`Upside Down Loot is identical to Loot except the fact that it's the opposite.
                    The laws that rule the elements are symmetrical to the ones that rule in Loot. ` )
                      .callFunction(() => {
                        setGlitch(true)
                        setTimeout(() => {
                          setBackwards(true);
                        }, 5000);
                      })
                      .start();
                  }}


                />
              </WhiteTextTypography>
            </Grid>
            <Grid item xs={0} sm={4} md={4} className={classes.card}>
              <img src={Portal.src} alt="portal_gif" />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}