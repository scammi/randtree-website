import React, { useState } from 'react';
import { ethers } from "ethers";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Button} from '@material-ui/core';

import {addresses} from '../contracts/addresses';
import { RAFFLE_ABI } from '../contracts/abi';

import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import ArtCard from '../components/ArtCard';
import RaffleCard from '../components/RaffleCard';
import ConnectButton from '../components/buttons/ConnectButton';

export default function Index() {
  let [walletConnected, setWalletConnected] = useState(false)
  let [currentBatch, setCurrentBatch] = useState(0)
  let [raffle, setRaffle] = useState({})
  let [currentAccount , setCurrentAccount] = useState('')
  let [provider, setProvider] = useState([])
  let tempProvider = []

  async function loadBlockChain() {
    tempProvider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts =  await tempProvider.send('eth_requestAccounts', [])

    const account = ethers.utils.getAddress(accounts[0])

    setCurrentAccount(account)

    const network = await tempProvider.getNetwork()
    const network_name = network.name 
    const signer = await tempProvider.getSigner()

    let contract = new ethers.Contract(addresses[network_name].Raffle, RAFFLE_ABI, signer)
    setRaffle(contract)

    currentBatch = await contract.currentBatch()
    setCurrentBatch(currentBatch.toNumber())
    setProvider(tempProvider)
    setWalletConnected(true)

    console.log(currentBatch)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Container maxWidth="md" style={{marginTop:"50px"}}>
          <Grid container height="50%" spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography component="h3" variant="h3" align="left" color="textPrimary">
                Random tree
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary" gutterBottom>
                random loot minting system
              </Typography>
            </Grid>
            <Grid item>
             <ConnectButton onClick={()=>{loadBlockChain()}}/> 
            </Grid>
            <Grid container spacing={2}  >
              <Grid item xs={6}>
                <ArtCard currentBatch={currentBatch}/>
              </Grid>
              <Grid item xs={6}>
                <RaffleCard status={walletConnected} contract={raffle}/>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
