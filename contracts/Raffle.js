async function Raffle(_contract) {

	let contract = _contract
	let actions = {}
	let state = {}
	let winners = []
	let loots = []
	let metadatas = {}
      
	return loadRaffle()
	
	async function loadRaffle() {
	  // current batch
	  const currentBatch = await contract.currentBatch()
      
	  drawCurrentRaffle(currentBatch)
      
	  console.info('currentbatch: ', currentBatch)
      
	  const s = await getBatchState(contract, currentBatch)
	  state = {
	    currentBatch,
	    ...s
	  }
	  console.info('Raffle state: ', state)
      
	  // move state 
	  await updateWorkerState('raffle', state.state)
      
	  // 0 is empty
	  winners.push({})
      
	  // Query all raffles
	  await queryRaffles()
      
	  // Draw claimed loots
	  const {raffleBatches: wonBatches, rloots } = await queryOwnerWon(currentAccount)
	  wonBatches.forEach(b => {
	    loots.push({
	      claimed: false,
	      batchId: b.batchId,
	      index: undefined // i need this
	    })
	  })
	  await Promise.all(rloots.map(async (loot) => {
	    // const { name } = await getLootMetadata(loot.id)
	    const name = ""
	    // todo : remove duplicate logic
	    metadatas[loot.id] = {
	      name,
	      properties: loot.properties
	    }
	    loots.push({
	      claimed: true,
	      id: loot.id,
	      properties: loot.properties,
	      name
	    })
	  }))
	  // Draw LOOTS
	  console.log(loots)
      
	  loots.forEach(loot => {
	    if(loot.claimed == true) {
	      // draw claimed
	      drawClaimedLoot(loot)
	    } else {
	      // draw unclaim
	      drawUnclaimedLoot(loot)
	    }
	  })
      
	  actions = {
	    buy: async (amount = 1) => {
	      await contract.buy()
	    },
	    processBatch: async () => {
	      try {
		if (await contract.canProcess() ) {
		  const tx = await contract.processBatch()
		  console.log('processing batch at:', tx.hash)
		  await tx.wait()
		} else {
		  console.log('cooldown')
		}
      
	      } catch (e) {
		console.error(e)
	      }
	    },
	    claim: async (batchId) => {
	      const [winner, _, claimed] = await contract.getWinner(batchId)
      
	      if (winner == currentAccount && !claimed) {
		const tx = await contract.claim(batchId)
		const receipt = await tx.wait()
      
		return receipt
	      }
	      else {
		throw new Error('could_not_claim_loot')
	      }
	    },
	    getLoot: async () => {
	      // Clean loot data
	      loots = []
      
	      // Get claimed loots
	      const {raffleBatches: wonBatches, rloots } = await queryOwnerWon(currentAccount)
	      wonBatches.forEach(b => {
		loots.push({
		  claimed: false,
		  batchId: b.batchId,
		  index: undefined // i need this
		})
	      })
	      await Promise.all(rloots.map(async (loot) => {
		// const { name } = await getLootMetadata(loot.id)
		const name = `Lootbox #${loot.id}`
		// todo : remove duplicate logic
		metadatas[loot.id] = {
		  name,
		  properties: loot.properties
		}
		loots.push({
		  claimed: true,
		  id: loot.id,
		  properties: loot.properties,
		  name
		})
	      }))
      
	      return loots;
	  }
	}
      
	  return {
	    actions,
	    state,
	    metadatas
	  }
	}
}