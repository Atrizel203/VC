// App.js
import React from 'react';
import { CssBaseline, Container, Grid, Typography, Avatar , Box } from '@mui/material';
import Navbar from './atoms/NavBar';
import ContactInfo from './atoms/ContactInfo';
import SocialMedia from './atoms/SocialMedia';
import Objectives from './molecules/Objectives';
import AboutMe from './molecules/AboutMe'; // Asegúrate de importar tu nuevo componente
import WorkExperience from './molecules/WorkExperience';
import Education from './molecules/Education';
import './CSS/styles.css'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ borderRadius:'5px', mb: 2, backgroundColor: 'grey', color: 'white', width: '71vh' ,pt: 1, pb: 1, marginTop: '70px', display: 'flex', alignItems: 'center' }}>
              <Avatar alt="Ángel Mauricio Ramírez Sánchez" src="./img/yop.jpg" sx={{ width: 56, height: 56, marginRight: 1 }} />
              <Typography variant="h4" sx={{ color: 'gold' }}>Ángel Mauricio Ramírez Sánchez</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <ContactInfo />
          </Grid>
          <Grid item xs={6}>
            <SocialMedia />
          </Grid>
          <Grid item xs={6}>
            <Objectives />
          </Grid>
          <Grid item xs={6}>
            <AboutMe /> {/* Asegúrate de agregar tu nuevo componente aquí */}
          </Grid>
          <Grid item xs={12}>
            <WorkExperience />
          </Grid>
          <Grid item xs={12}>
            <Education />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
