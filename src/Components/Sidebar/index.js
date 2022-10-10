import React from 'react'
import { SideBarContainer, 
        Icon, 
        CloseIcon, 
        SideBarWrapper, 
        SidebarMenu,
        SideBtnWrap,
        SidebarRoute,
        SidebarLink  } from './SidebarElements'

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
       <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon /> 

            </Icon>
            <SideBarWrapper> 
                <SidebarMenu>
                    <SidebarLink to='wordle' onClick={toggle}>
                        Wordle
                    </SidebarLink>
                    <SidebarLink to='trekka' onClick={toggle}>
                        Trekka™
                    </SidebarLink>
                    <SidebarLink to='divita' onClick={toggle}>
                        Divita™
                    </SidebarLink>
                    <SidebarLink to='rms2' onClick={toggle}>
                        RMS2™
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer> 
    </>
  )
}

export default SideBar