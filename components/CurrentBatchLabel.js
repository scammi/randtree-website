import React from 'react';
import { Grid, Badge } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import WhiteTextTypography from './WhiteTextTypography';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -20,
    top: 16,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    marginLeft: '30px'
  },
}));

export default function CurrentBatchLabel(prop) {

  return (
    <Grid item>
      <StyledBadge
      color="secondary"
      badgeContent={prop.currentBatch}
      >
        <WhiteTextTypography>
          Current Raffle
        </WhiteTextTypography>
      </StyledBadge>
    </Grid>
  );
}