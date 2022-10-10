import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaLinkedin } from 'react-icons/fa'


import { animateScroll as scroll } from 'react-scroll'

import { FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinkTitle, 
    FooterLink, 
    FooterLinkItems, 
    FooterLinksWrapper, 
    SocialMedia,
    SocialLogo, 
SocialIconLink, StyledContactForm } from './FooterElements'


export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" ></input>
      </form>
    </StyledContactForm>
    );
  };

const Footer = () => {

const toggleHome = () => {
        scroll.scrollToTop();
    }  
    
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <ContactUs />
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialLogo to='/'onClick={toggleHome}>
                        SPG
                    </SocialLogo>

                    <SocialIconLink href="https://www.linkedin.com/in/saurag/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                     
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer