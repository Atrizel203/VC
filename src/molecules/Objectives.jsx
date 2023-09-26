// components/molecules/Objectives.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function Objectives() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'grey', color: 'white', width: '71vh' ,p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Objetivos</Typography>
      <Typography variant="body1"> - Desarrollar software de alta calidad que impacte positivamente a la sociedad.</Typography>
      <Typography variant="body1"> - Aprender nuevas tecnologías y mejorar mis habilidades de comunicación.</Typography>
      <Typography variant="body1"> - Trabajar en un ambiente de respeto y colaboración.</Typography>
      <Typography variant="body1"> -Aprender de mis compañeros y compartir mis conocimientos.</Typography>
    </Box>
  );
}

export default Objectives;
