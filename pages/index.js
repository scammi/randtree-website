import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, Chip } from '@material-ui/core';
import { ethers } from "ethers";

import {addresses} from '../contracts/addresses';
import { RAFFLE_ABI } from '../contracts/abi';

import WhiteTextTypography from '../components/WhiteTextTypography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrentBatchLabel from '../components/CurrentBatchLabel';
import { Update } from '@material-ui/icons';

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

  let provider = []
  let Raffle = {}
  let currentAccount = ''

  async function loadBlockChain() {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts =  await provider.send('eth_requestAccounts', []);

    currentAccount = ethers.utils.getAddress(accounts[0])

    const network = await provider.getNetwork()
    const network_name = network.name 
    const signer = await provider.getSigner()

    Raffle = new ethers.Contract(addresses[network_name].Raffle, RAFFLE_ABI, signer)
    currentBatch = await Raffle.currentBatch()
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
                <Button variant="contained">Buy ticket</Button>
              </Grid>
              <CurrentBatchLabel currentBatch={currentBatch}/>
            </Grid>
          </Grid>

        </Container>
      </main>
        <Footer />
    </React.Fragment>
  );
}
