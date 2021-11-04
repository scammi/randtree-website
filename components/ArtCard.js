import React, { useState ,useEffect } from 'react';
import { Button, Box, Card, CardActions, CardContent, Typography, CardMedia, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppContext } from '../context/AppContext';
import ClaimPriceButton from './buttons/ClaimPrice';

export default function ArtCard() {

  const [ state, setState ] = useAppContext();
  const [bmp, setBMP] = useState([])

  const previousBatch = () => {
    setState((state) => ({
      ...state,
      batchOnDisplayIndex: state.batchOnDisplayIndex - 1 
    }))    
  }

  const nextBatch = () => {
    setState((state) => ({
      ...state,
      batchOnDisplayIndex: state.batchOnDisplayIndex + 1
    }))
  }
  
  const enableNextBatch = () => {
    if(!state.connected || (state.latestBatch == (state.batchOnDisplayIndex + 1))) return true
    else return false
  }
  
  const enablePreviousBatch = () => {
    if(!state.connected || (state.batchOnDisplayIndex == 0)) return true
    else return false
  }

  async function getBMP() {
    // new Uint8Array((await (await fetch('https://ipfs.io/ipfs/QmQUq2KxNCnvzPFXnFJYZ276q1JCnNirKtiWmoiiptwmWQ%27)).arrayBuffer()))

    fetch('https://ipfs.io/ipfs/QmQUq2KxNCnvzPFXnFJYZ276q1JCnNirKtiWmoiiptwmWQ')
    .then(r => {
      return r.arrayBuffer()
    })
    .then(async (imgArray) => {
      let img = new Uint8Array(imgArray)
      console.log(img)
      setBMP(img)
    })
    
  };

  function getRGBA(color) {
    return [
      color & 0xff,
      (color & 0x00ff00) >> 8,
      (color & 0xff0000) >> 16,
      0xFF
    ]
  }
  const pixelSize = 16
  const imageSize = 32
  
  function drawAmplifiedImage(ctx, image) {
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 32; x++) {
        const rgba = getRGBA(image[y * 32 + x])
        console.log(`rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`)

        ctx.fillStyle = `rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`

        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  }
  
  const Canvas = ({ data }) => {
    const canvas = React.useRef();
    React.useEffect(() => {
      const context = canvas.current.getContext('2d');
      if (data.length === 0) return
      if (canvas.current) {
        drawAmplifiedImage(context, data)
      }
    });
  
    return (
      <canvas
        ref={canvas}
        width={imageSize * pixelSize}
        height={imageSize * pixelSize}
        style={{
          border: '1px solid #000000'
        }}
      >
      </canvas >
    )
  };
  React.useEffect(() => {
    getBMP()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return(
    <Card style={{ width: "400px" }}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography color="primary" variant="h6" gutterBottom>
              Tree ~ {state.connected ? state.batchOnDisplayIndex + 1: '' }
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={previousBatch} disabled={enablePreviousBatch()}>
              <ArrowBackIosIcon/>
            </Button>
            <Button onClick={nextBatch} disabled={enableNextBatch()}>
              <ArrowForwardIosIcon/>
            </Button>
          </Grid>
        </Grid>
        <Canvas data={bmp}/>
        <CardActions>
          <ClaimPriceButton/>
        </CardActions>
      </CardContent>
    </Card>
  );
}