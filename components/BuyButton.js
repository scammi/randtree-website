import React from 'react';
import { Grid, Button } from '@material-ui/core';
import WhiteTextTypography from './WhiteTextTypography';


export default function BuyButton(prop) {

  console.log(prop.contract)
  let ready = Object.entries(prop.contract).length

  if(ready) 
  {
    return (
      <Button variant="contained">Buy ticket</Button>
    );
  }
  else
  {
    return (
      <Button variant="contained" disabled>Buy ticket</Button>
    );
  }
  
}