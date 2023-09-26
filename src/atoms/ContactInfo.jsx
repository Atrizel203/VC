// components/atoms/ContactInfo.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function ContactInfo() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'grey', color: 'white', width: '71vh', p: 2 }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Información de contacto</Typography>
      <Typography variant="body1"> - Ángel Mauricio Ramírez Sánchez</Typography>
      <Typography variant="body1"> - angel@gmail.edu.mx</Typography>
      <Typography variant="body1"> - +52 1 55 1234 5678</Typography>
    </Box>
  );
}

export default ContactInfo;
