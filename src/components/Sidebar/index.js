import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to='about'>About</SidebarLink>
                <SidebarLink onClick={toggle} to='discover'>Discover</SidebarLink>
                <SidebarLink onClick={toggle} to='services'>Services</SidebarLink>
                <SidebarLink onClick={toggle} to='signup'>Sign up</SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to='/singin'>Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
