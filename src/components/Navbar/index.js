import {FaBars} from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const Navbar = ({toggle}) => {
    return(
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Dolla</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign in</NavBtnLink>
                </NavBtn>

                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
            </NavbarContainer>
        </Nav>
    );
}
export default Navbar;