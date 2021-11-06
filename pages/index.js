import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid, Typography} from '@material-ui/core';
import Stack from '@mui/material/Stack';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtCard from '../components/ArtCard';
import RaffleCard from '../components/RaffleCard';
import { useAppContext } from '../context/AppContext';

export default function Index() {
 
  const [ state, setState ] = useAppContext();

  async function queryRaffles() {
    try {
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
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(async ()=>{
    let batches = await queryRaffles()

    setState((state) => ({
      ...state,
      batches: batches?.raffleBatches
    }))
  },[state.account])
 
  console.log(state.batches)
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <main>
        <Container maxWidth="md" style={{marginTop:"40px"}}>
        
          <Grid container height="50%" spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography component="h3" variant="h3" align="left" color="textPrimary">
                Rand trees
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary" gutterBottom>
                Fair raffle distribution 
              </Typography>
            </Grid>  
          </Grid>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 5 }}
            width={{ xs: 'auto', sm: 'auto'}}
            justifyContent="space-around"
            style={{marginTop:"20px"}}
          >
            <Grid item>
              <ArtCard/>
            </Grid>
            <Grid item>
              <RaffleCard/>
            </Grid>
          </Stack> 
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
