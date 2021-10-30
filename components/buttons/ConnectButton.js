import React from 'react';
import { Button } from '@material-ui/core';

export default function ConnectButton (prop) {
  
  return(
    <Button variant="contained" onClick={prop.action()}> Connect </Button>
  );
}