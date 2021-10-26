import { ethers } from "ethers";
import { addresses } from "../../contracts/addresses";
import { RAFFLE_ABI } from "../../contracts/abi";
import WhiteTextTypography from '../WhiteTextTypography';
import { Button, Box, Typography, Modal } from '@material-ui/core';

export default function LootBox(props) {
  const provider = props.provider
  const currentAccount = props.currentAccount
  const batchId = props.batchId

  async function claimLoot() {
  
    const network = await provider.getNetwork()
    const network_name = network.name 
    const signer = await provider.getSigner()
    const contract = await new ethers.Contract(addresses[network_name].Raffle, RAFFLE_ABI, signer)
    
    const [winner, _, claimed] = await contract.getWinner(batchId)

    if (winner.toLowerCase() == currentAccount && !claimed) {
      const tx = await contract.claim(batchId)
      const receipt = await tx.wait()

      return receipt
    }
    else {
      throw new Error('could_not_claim_loot')
    }
  }
  
  return (
    <div>
      <img src={'loot-box.png'} alt="" width="50" heigh="70" onClick={claimLoot}/>
   </div>
  );
}
