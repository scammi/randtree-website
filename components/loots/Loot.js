import React, { useEffect } from 'react';
import { ethers } from "ethers";

import { addresses } from "../../contracts/addresses";
import { LOOTPROPERTIES_ABI } from "../../contracts/abi";

export default function Loot(props) {

  async function getLootMetadata() {
    const provider = props.provider

    const network = await provider.getNetwork()
    const network_name = network.name 
    const signer = await provider.getSigner()
    const contract = await new ethers.Contract(addresses[network_name].LootProperties, LOOTPROPERTIES_ABI, signer)

    const d = await contract.getProperties(ethers.BigNumber.from(props.properties))

    console.log(d)
  }

  return (
    <div>
      <img src={'gem.png'} alt="this is car image" width="45" heigh="45" onClick={getLootMetadata}/>
   </div>
  );
}
