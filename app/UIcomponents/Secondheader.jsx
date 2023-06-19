'use client'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/system';

const ExtendedFab = styled(Fab)({
    width: '300px', // Set the desired width here
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  });

const ExtendedFab1 = styled(Fab)({ 
display: 'flex',
justifyContent: 'flex-start',
// alignItems: 'flex-end',
});

const FabContainer = styled('div')({
    display: 'flex',
    gap: '16px', // Set the desired gap between the FABs
  });

export default function FloatingActionButtons() {
    return (
        <div>
            <FabContainer>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <ExtendedFab variant="extended" size = "large">
        <span style={{ marginRight: '8px' }}>
          <SearchRoundedIcon sx={{ mr: 1 }} />
          Search     
        </span>        
        </ExtendedFab>
      </Box>

      {/* RIght side contents */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '& > *': {
          m: 1,
        },
      }}>
        <ExtendedFab1 variant="extended" size = "large">
        
          Clear Chat 
                
        </ExtendedFab1>
      </Box>
      </FabContainer>
      </div>
    );
  }