import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Button} from '@material-ui/core';

import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import ArtCard from '../components/ArtCard';
import RaffleCard from '../components/RaffleCard';
import { useAppContext } from '../context/AppContext';

export default function Index() {
 
  const [ state, setState ] = useAppContext();

  async function queryRaffles() {
    const version = '0.2.4'
    const response = await fetch(`https://api.studio.thegraph.com/query/6834/piedras/${version}`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          raffleBatches {
            id
            batchId
            winner
            claimed
            processed
          }
        }`
      }),
      headers: {
          'content-type': 'application/json'
      }
    })
    
    const {data} = await response.json();

    return data;
  }

  useEffect(async ()=>{
    let batches = await queryRaffles()

    setState((state) => ({
      ...state,
      batches: batches?.raffleBatches
    }))
  })
 
  console.log(state.batches)
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <main>
        <Container maxWidth="md" style={{marginTop:"40px"}}>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ArtCard/>
            </Grid>
            <Grid item xs={6}>
              <RaffleCard/>
            </Grid>
          </Grid>

        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
