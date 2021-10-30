import React from 'react';
import { Button } from '@material-ui/core';

export default function ConnectButton (props) {
  console.log("hey", props.walletStatus) 

  if(props.walletStatus)
  {
    return(<Button variant="contained" color="secondary"> Connected </Button>)
  }
  else 
  {
    return(<Button variant="contained" onClick={props.onClick}> Connect </Button>)
  }

}