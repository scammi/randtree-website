import React, {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import { useAppContext } from '../../context/AppContext';
import { ethers } from "ethers";
import { addresses } from '../../contracts/addresses';
import { RAFFLE_ABI } from '../../contracts/abi';
import { useRouter } from 'next/router';

export default function ConnectButton () {
  const [state, setState] = useAppContext()
  const [show, setShow] = useState('inline')
  const router = useRouter()
  
  async function connect() {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts =  await provider.send('eth_requestAccounts', [])

    const account = ethers.utils.getAddress(accounts[0])
    const network = await provider.getNetwork()
    const network_name = network.name 
    const signer = await provider.getSigner()

    if(network.chainId == 4 || network.chainId == 1)
    {
      let raffleContract = await new ethers.Contract(addresses[network_name].Raffle, RAFFLE_ABI, signer)
      let currentBatch = await raffleContract.currentBatch().then((b)=>b.toNumber())

      setState((state) => ({
        ...state, 
        connected: true,
        network: network,
        latestBatch: currentBatch,
        batchOnDisplayIndex: currentBatch - 1,
        account: account,
        provider: provider,
        raffleContract: raffleContract 
      }))
    }
    else
    {
      alert('Please connect to a valid network')
    }

  }

  useEffect(()=> {
    if(router.pathname == '/')
    {
      setShow('inline')
    }
    else
    {
      setShow('none')
    }
  },[router.pathname])

  if(state.connected)
  {
    return(
      <Button 
        style={{display: `${show}`}}
        variant="contained" 
        color="secondary" 
        onClick={()=>(console.log(state.network))}
      > 
        Connected 
      </Button>)
  }
  else 
  {
    return(
    <Button 
      style={{display: `${show}`}}
      variant="contained" 
      onClick={()=>(connect())}
    > 
      Connect
    </Button>)
  }

}