// components/molecules/AboutMe.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function AboutMe() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'grey', color: 'white', p: 2, width:'56vh', marginLeft:'50px', paddingBottom: '42px' }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Sobre mí</Typography>
      <Typography variant="body1">- Soy un desarrollador junior apasionado por la tecnología y siempre dispuesto a aprender cosas nuevas. Me encanta resolver problemas y crear soluciones innovadoras que puedan tener un impacto positivo en el mundo.</Typography>
    </Box>
  );
}

export default AboutMe;
