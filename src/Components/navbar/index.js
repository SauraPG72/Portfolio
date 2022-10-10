import React, {useEffect, useState} from 'react'
import { Nav,
     NavbarContainer, 
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks,
     NavBtn,
     NavBtnLink } from './NavBarElements'
import {FaBars} from 'react-icons/fa'

import { animateScroll as scroll, scrollSpy } from 'react-scroll'

const NavBar = ( {toggle} ) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {

        if(window.scrollY >= 80) {
            setScrollNav(true)
        }

        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
         
    }, [])


    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <> 
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}> 
                    SPG
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>

                    <NavItem>
                        <NavLinks to="wordle" smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}activeClass='active'>
                            Wordle
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="trekka" smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}activeClass='active'>
                            Trekka™
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="divita" smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}activeClass='active'>
                            Divita™
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="rms2" smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}activeClass='active'>
                            RMS2™
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="services" smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}activeClass='active'>
                            Frameworks
                        </NavLinks>
                    </NavItem>

                    
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default NavBar