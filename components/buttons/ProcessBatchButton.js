import React from 'react';
import { Button } from '@material-ui/core';
import { useAppContext } from '../../context/AppContext';

export default function ProcessBatchButton () {
  const [state, setState] = useAppContext();

  async function processBatch() {
    try {
      if (await state.contract.canProcess() ) {
        const tx = await state.contract.processBatch()
        console.log('processing batch at:', tx.hash)
        await tx.wait()
      } else {
        console.log('cooldown')
      }

    } catch (e) {
      console.error(e)
    }
  }

  if(state.connected) 
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