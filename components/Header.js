import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ConnectButton from './buttons/ConnectButton';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.default,
    padding: '2px'
  },
}));


export default function Header(props) {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            <Grid item>
              <Typography variant="h5" component="div" >
                rTree
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div" >
                About
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div" >
                FAQ
              </Typography>
            </Grid>

          </Grid>
           <ConnectButton walletStatus={props.walletStatus} onClick={()=>{props.onClick()}}/> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
