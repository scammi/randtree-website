import React from 'react';
import { Grid } from '@material-ui/core';
import WhiteTextTypography from './WhiteTextTypography';


export default function LootGrid(props) {

  let owner = props.currentAccount.toLowerCase()
  console.log(props)

  async function queryOwnerWon(owner) {
    const version = '0.2.4'
    const response = await fetch(`https://api.studio.thegraph.com/query/6834/piedras/${version}`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          rloots(where:{owner:"${owner}"}) {
            id
            owner
            properties
            broken
          },
          raffleBatches(where:{ winner:"${owner}", claimed: false  }) {
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
    console.log(data)

    return data; 
  }
    
    console.log(queryOwnerWon(owner))
    // loots = []

    // // Get claimed loots
    // const {raffleBatches: wonBatches, rloots } = await queryOwnerWon(currentAccount)
    // wonBatches.forEach(b => {
    //   loots.push({
    //     claimed: false,
    //     batchId: b.batchId,
    //     index: undefined // i need this
    //   })
    // })
    // await Promise.all(rloots.map(async (loot) => {
    //   // const { name } = await getLootMetadata(loot.id)
    //   const name = `Lootbox #${loot.id}`
    //   // todo : remove duplicate logic
    //   metadatas[loot.id] = {
    //     name,
    //     properties: loot.properties
    //   }
    //   loots.push({
    //     claimed: true,
    //     id: loot.id,
    //     properties: loot.properties,
    //     name
    //   })
    // }))

    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          <WhiteTextTypography>{index}</WhiteTextTypography>
          </Grid>
        ))}
      </Grid>
    )

  
}