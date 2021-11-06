import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ConnectButton from './buttons/ConnectButton';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: 'none'
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#D4E6B5', padding:'2px'}}>
        <Toolbar>
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            <Grid item>
              <Typography color="#000" variant="h5" component="div">
                <Link color="#000" href="/" underline="none">
                 rTree
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div" >
                <Link color="#000" href="/about" underline="hover">
                  About
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                <Link color="#000" href="/FAQ" underline="hover">
                  FAQ
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <ConnectButton walletStatus={props.walletStatus} onClick={()=>{props.onClick()}}/> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
