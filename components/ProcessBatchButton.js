import React from 'react';
import { Button } from '@material-ui/core';

export default function ProcessBatchButton (prop) {

  const contract = prop.contract
  const ready = Object.entries(contract).length

  async function processBatch() {
    try {
      if (await contract.canProcess() ) {
        const tx = await contract.processBatch()
        console.log('processing batch at:', tx.hash)
        await tx.wait()
      } else {
        console.log('cooldown')
      }

    } catch (e) {
      console.error(e)
    }
  }

  if(ready) 
  {
    return (
      <Button 
        variant="contained"
        onClick={processBatch}
      >
        Process batch 
      </Button>
    );
  }
  else
  {
    return (
      ''
    );
  }
  
}