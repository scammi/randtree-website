import React from 'react';
import { Button } from '@material-ui/core';
import { useAppContext } from '../../context/AppContext';


export default function ClaimPriceButton () {
  const [state, setState] = useAppContext();
  
  async function claimPrice(batchId) {
    const [winner, _, claimed] = await state.contractRaffle.getWinner(state.ClaimPriceButton)

    if (winner == currentAccount && !claimed) {
      const tx = await contract.claim(batchId)
      const receipt = await tx.wait()

      return receipt
    }
    else {
      throw new Error('could_not_claim_loot')
    }

  }

  return(<Button variant="contained" onClick={()=>(claimPrice())}> buy </Button>)

}