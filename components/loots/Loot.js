import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";

import { addresses } from "../../contracts/addresses";
import { LOOTPROPERTIES_ABI } from "../../contracts/abi";
import WhiteTextTypography from '../WhiteTextTypography';
import { Button, Box, Typography, Modal } from '@material-ui/core';

export default function Loot(props) {

  const [open, setOpen] = useState(false)
  const [properties, setProperties] = useState([])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function getLootMetadata() {
    const provider = props.provider
  
    const network = await provider.getNetwork()
    const network_name = network.name 
    const signer = await provider.getSigner()
    const contract = await new ethers.Contract(addresses[network_name].LootProperties, LOOTPROPERTIES_ABI, signer)
  
    const d = await contract.getProperties(ethers.BigNumber.from(props.properties))
  
    handleOpen()

    const keys = ['Rarity', 'Color', 'Material']
    const spans = {}

    keys.forEach((v,i)=> {
      spans[v] = d[i]
    })

    setProperties(spans)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'text.secondary',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div>
        <img src={'gem.png'} alt="this is car image" width="45" heigh="45" onClick={getLootMetadata}/>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <WhiteTextTypography id="modal-modal-title" variant="h6" component="h2">
           Properties: 
          </WhiteTextTypography>
          {Object.entries(properties).map((prop, index)=> (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {prop[0]}:   {prop[1]}
            </Typography>
          )) }
        </Box>
      </Modal>
    </>
  );
}
