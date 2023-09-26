// components/atoms/SocialMedia.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function SocialMedia() {
  return (
    <Box sx={{borderRadius:'5px', mb: 2, backgroundColor: 'grey', color: 'white', width:'56vh' , p: 2, marginLeft: '50px' }}>
      <Typography variant="h6" sx={{ color: 'gold' }}>Redes sociales</Typography>
      <Typography variant="body1">- LinkedIn: Atrizel203</Typography>
      <Typography variant="body1">- Twitter: @Atrizel203</Typography>
        <Typography variant="body1">- GitHub: Atrizel203</Typography>
    </Box>
  );
}

export default SocialMedia;
