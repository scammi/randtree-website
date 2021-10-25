import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button} from '@material-ui/core';
import { ethers } from "ethers";

import {addresses} from '../contracts/addresses';
import { RAFFLE_ABI } from '../contracts/abi';

import WhiteTextTypography from '../components/WhiteTextTypography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrentBatchLabel from '../components/CurrentBatchLabel';
import BuyButton from '../components/BuyButton';
import LootGrid from '../components/LootGrid';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0, 6),
  },
  paragraph: {
    marginTop: theme.spacing(5),
  }
}));

const cards = [1, 2];

export default function Index() {
  const classes = useStyles();
  let [currentBatch, setCurrentBatch] = useState(0)
  let [raffle, setRaffle] = useState({})
  let [currentAccount , setCurrentAccount] = useState('')

  let provider = []

  async function loadBlockChain() {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts =  await provider.send('eth_requestAccounts', []);

    const account = ethers.utils.getAddress(accounts[0])

    setCurrentAccount(account)

    const network = await provider.getNetwork()
    const network_name = network.name 
    const signer = await provider.getSigner()

    let contract = new ethers.Contract(addresses[network_name].Raffle, RAFFLE_ABI, signer)
    setRaffle(contract)

    currentBatch = await contract.currentBatch()
    setCurrentBatch(currentBatch.toNumber())

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
                rLOOT
              </WhiteTextTypography>
              <WhiteTextTypography variant="h6" align="left" color="textSecondary" gutterBottom>
                random loot minting system
              </WhiteTextTypography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={loadBlockChain}> Connect </Button>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <BuyButton contract={raffle}/>
              </Grid>
              <CurrentBatchLabel currentBatch={currentBatch}/>
              <LootGrid currentAccount={currentAccount}/>
            </Grid>
          </Grid>
        </Container>
      </main>
        <Footer />
    </React.Fragment>
  );
}
