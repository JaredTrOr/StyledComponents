import Video from '../../videos/video.mp4';
import { useState } from 'react';
import { 
  HeroContainer,
  HeroBg, 
  VideBg, 
  HeroContent, 
  HeroH1, HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight } from './HeroElements';

import {Button} from '../ButtonElement';
const HeroSection = () => {

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideBg autoPlay muted loop src={Video} type='video/mp4'/>
        </HeroBg>

        <HeroContent>
          <HeroH1>Virtual Banking Mode Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in
            credit towards your next payment.
          </HeroP>

          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;