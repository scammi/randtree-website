import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import WhiteTextTypography from './WhiteTextTypography';



const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.default,
    padding: '2px'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar>
        <Grid container spacing={6} justifyContent="center" alingt="center">
          <Grid item xs={8} sm={10} md={10}>
            <WhiteTextTypography variant="h6" color="inherit">
              <Link color="inherit" href="/">
                Upside Down
              </Link>{' '}
            </WhiteTextTypography>
          </Grid>
          <Grid item xs={2} sm={1} md={1}>
            <WhiteTextTypography variant="subtitle1" color="textSecondary" align="right">
              <Link color="inherit" href="/faq">
                FAQ
              </Link>{' '}
            </WhiteTextTypography>
          </Grid>
          <Grid item xs={2} sm={1} md={1}>
            <WhiteTextTypography variant="subtitle1" color="textSecondary" align="right">
              <Link color="inherit" href="/help">
                How to Mint
              </Link>{' '}
            </WhiteTextTypography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
