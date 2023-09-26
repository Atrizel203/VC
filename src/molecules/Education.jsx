
import React from 'react';
import { Typography, Box } from '@mui/material';

function Education() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'grey', color: 'white', width: '132vh' , p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Educación</Typography>
      <Typography variant="body1">Ingenieria en software, UPChiapas , 2014 - 2018</Typography>
    </Box>
  );
}

export default Education;
