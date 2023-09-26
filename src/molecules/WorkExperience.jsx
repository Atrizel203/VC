// components/molecules/WorkExperience.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function WorkExperience() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'grey', color: 'white', width: '132vh' , p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Experiencia laboral</Typography>
      <Typography variant="body1"> - Desarrollador Senior en Microsoft, 2020 - Presente</Typography>
      <Typography variant="body1"> - Desarrollador Junior en Google, 2018 - 2020</Typography>
    </Box>
  );
}

export default WorkExperience;
