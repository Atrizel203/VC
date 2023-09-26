// components/Curriculum.js
import React from 'react';
import ContactInfo from '../atoms/ContactInfo';
import SocialMedia from '../atoms/SocialMedia';
import Objectives from '../molecules/Objectives';
import WorkExperience from '../molecules/WorkExperience';
import Education from '../molecules/Education';

function Curriculum() {
  return (
    <div>
      <ContactInfo />
      <SocialMedia />
      <Objectives />
      <WorkExperience />
      <Education />
    </div>
  );
}

export default Curriculum;
