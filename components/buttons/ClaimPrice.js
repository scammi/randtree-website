import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useAppContext } from '../../context/AppContext';


export default function ClaimPriceButton () {
  let [state, setState] = useAppContext();
  let [canClaim, setCanClaim] = useState(false)

  async function claimPrice(batchId) {
    const [winner, _, claimed] = await state.raffleContract.getWinner(state.batchOnDisplayIndex)

    if (winner == currentAccount && !claimed) {
      const tx = await contract.claim(batchId)
      const receipt = await tx.wait()

      return receipt
    }
    else {
      throw new Error('could_not_claim_loot')
    }
  }

  async function canUserClaim() {
    if(state.connected)
    {
      const [winner, _, claimed] = await state.raffleContract.getWinner(state.batchOnDisplayIndex)
      
      if(winner == state.account && !claimed) {
        console.log('TRUE')
        setCanClaim(true)
      }
      else
      {
        setCanClaim(false)
        console.log('false')
      }
    }
  }

  useEffect(() => {
    canUserClaim()
  },[state.batchOnDisplayIndex])

  if(canClaim)
  {
    return(
      <Button variant="contained" onClick={()=>(claimPrice())}> Claim </Button>
    )
  }
  else
  {
    return('')
  }
}