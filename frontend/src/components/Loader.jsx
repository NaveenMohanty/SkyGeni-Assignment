import React from 'react';
import { Backdrop, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/system';

const BlurBackdrop = styled(Backdrop)({
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
});

const Loader = ({ open }) => {
  return (
    <BlurBackdrop open={open}>
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <CircularProgress color='inherit' />
      </Box>
    </BlurBackdrop>
  );
};

export default Loader;
