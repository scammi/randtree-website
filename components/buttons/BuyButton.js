import React from 'react';
import { Button } from '@material-ui/core';

export default function BuyButton(props) {

  let ready = Object.entries(props.contract).length > 0

  async function buy() {
    await props.contract.buy()
  }
  return (
    <Button 
      variant="contained"
      onClick={buy}
      disabled={!ready}
      >
      Buy ticket
    </Button>
  );
  
}