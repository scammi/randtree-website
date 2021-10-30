import React from 'react';
import { Grid, Button } from '@material-ui/core';


export default function BuyButton(prop) {

  let ready = Object.entries(prop.contract).length

  async function buy() {
    await prop.contract.buy()
  }

  if(ready) 
  {
    return (
      <Button 
        variant="contained"
        onClick={buy}
      >
        Buy ticket
      </Button>
    );
  }
  else
  {
    return (
      <Button variant="contained" disabled>Buy ticket</Button>
    );
  }
  
}