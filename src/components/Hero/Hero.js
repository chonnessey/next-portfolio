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
      Creative and forward thinking Full Stack Developer. I've spent the last 2 years immersing myself into the web development world and I couldn't be happier to have taken the plunge. I have an appetite to keep learning new technologies and methods in order to make the web experience accesible and enjoyable for everyone.
      </SectionText>
      {/* <Button onClick={() => window.location = ``}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;