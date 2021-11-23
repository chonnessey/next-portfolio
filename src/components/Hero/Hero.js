import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There, <br />
        I'm Adrian Camacho
      </SectionTitle>
      <SectionText>
      Creative and forward-thinking Junior Full Stack Developer with a keen eye in creating intuitive digital design projects. I've spent the last 7 years honing in my soft skills in the service industry and am more than ready to make the transition into web development.
      </SectionText>
      <Button onClick={() => window.location = ``}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;