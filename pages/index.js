import React, { useState } from 'react';
import { ethers } from "ethers";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Button} from '@material-ui/core';

import {addresses} from '../contracts/addresses';
import { RAFFLE_ABI } from '../contracts/abi';

import WhiteTextTypography from '../components/WhiteTextTypography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrentBatchLabel from '../components/CurrentBatchLabel';
import BuyButton from '../components/BuyButton';
import LootGrid from '../components/LootGrid';
import ProcessBatchButton from '../components/ProcessBatchButton';

export default function Index() {
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
              <WhiteTextTypography component="h3" variant="h3" align="left" color="textPrimary">
                Random tree
              </WhiteTextTypography>
              <WhiteTextTypography variant="h6" align="left" color="textSecondary" gutterBottom>
                random loot minting system
              </WhiteTextTypography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={loadBlockChain}> Connect </Button>
            </Grid>
            <Grid container spacing={2} >
              <Grid item xs={2}>
                <BuyButton contract={raffle}/>
              </Grid>
              <CurrentBatchLabel currentBatch={currentBatch}/>
            </Grid>
          </Grid>
          <LootGrid currentAccount={currentAccount} provider={provider}/>
          <ProcessBatchButton contract={raffle}/>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
