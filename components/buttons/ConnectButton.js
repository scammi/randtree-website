import React from 'react';
import { Button } from '@material-ui/core';
import { useAppContext } from '../../context/AppContext';

export default function ConnectButton (props) {
  const [state, setState] = useAppContext();
  
  if(state.connected)
  {
    return(<Button variant="contained" color="secondary"> Connected </Button>)
  }
  else 
  {
    return(<Button variant="contained" onClick={props.onClick}> Connect </Button>)
  }

}