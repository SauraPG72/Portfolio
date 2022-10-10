import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, HeroBtnWrapper  } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />


        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome to Saura's Portfolio!</HeroH1>
            <HeroP>
                I am a tech - enthusiast, food-truck connoisseur, business owner and avid learner of all enticing Youtube rabbit holes. By day I run an award winning finance brokerage called Swyft Finance, and by night a practicing software developer! <br></br><br></br> I am a General Assembly Software Engineering Immersive Alumni, and am currently following my own software learning journey. I have attached some projects and apps I have developed, and look forward to seeing if there is something we can do together
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true"
                dark="true"
                >
                     Contact Me! {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection