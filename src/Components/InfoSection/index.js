import React from 'react'
import { FaDirections } from 'react-icons/fa'
import { Button } from '../ButtonElement'
import {InfoWrapper, InfoContainer, 
InfoRow, 
Column1, 
Column2, 
TextWrapper, 
TopLine, 
Heading, SubTitle, BtnWrap, ImgWrap, Img, Buttons
} from './InfoElements'




export const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, primary, dark, dark2, willBeDirected }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <SubTitle darkText={darkText}>
                                {description} 
                            </SubTitle>
                            <BtnWrap>
                                <a href={willBeDirected} target="_blank">
                                <Buttons
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                
                                >
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="30px" width="30px" />

                                </Buttons>
                                </a>
                                
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img autoPlay loop muted src={img} type='video/mp4' alt={alt} playbackRate={10}>
                            </Img>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection