import React from 'react';
import { Button } from '@material-ui/core';
import { useAppContext } from '../../context/AppContext';
import useInterval from '../../hook/useInterval';

export default function ProcessBatchButton () {
  const [state, setState] = useAppContext();

  async function processBatch() {
    try {
      const tx = await state.raffleContract.processBatch()
      console.log('processing batch at:', tx.hash)
      
      await tx.wait()

      location.reload(true)
    } catch (e) {
      console.error(e)
    }
  }

  async function canProcess() {
    if(state.connected)
    {
      if(await state.raffleContract.canProcess())
      {
        console.log('>>>> Can process <<<<')

        setState((state) => ({
          ...state,
          canProcess: true
        }))
      }
      else
      {
        console.log('>>>> process not ready <<<<')
      }
    }
  }

  useInterval(canProcess, 10000)

  if(state.connected && state.canProcess) 
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