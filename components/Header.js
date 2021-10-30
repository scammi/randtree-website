import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
        <Grid container spacing={1} justifyContent="start">
          <Grid item xs={2} sm={1} md={1}>
            <Typography vrianat="h6">
              <Link color="primary" href="/">
               rTree 
              </Link>{' '}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1} md={1}>
            <Typography variant="subtitle1" color="">
              <Link color="primary" href="/faq">
                FAQ
              </Link>{' '}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
