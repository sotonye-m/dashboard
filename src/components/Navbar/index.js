import React from 'react'
import { Sidebar, Menu, MenuItem,useProSidebar} from 'react-pro-sidebar';
import {NavbarContainer, NavbarWrapper, TopLeft, TopRight, IconContainer, IconBadge, Avatar, Logo, Divq } from './NavBarElements';
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import Person from '../../assets/images/avatar-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Labels } from '../Sidebar/SidebarElements';
import {ReactComponent as ReactLogo} from '../../assets/images/blueberry_logo.svg'




const NavBar = () => {
    const { collapseSidebar } = useProSidebar();
    const imgsize = {
        height: 25,
        width: 45
    }
    return(
        <NavbarContainer>
            <NavbarWrapper>
                <TopLeft backgroundColor={''}>
                  <Logo><Sidebar backgroundColor={'#0c2556'}><Menu><MenuItem icon={<ReactLogo fill="#3b96ce" style={imgsize} />}><Labels style={{color: '#11A1FD', fontSize: 13}}>Wave</Labels></MenuItem></Menu></Sidebar></Logo>
                </TopLeft>
                <Divq><FontAwesomeIcon icon={faBars} onClick={() => collapseSidebar()} style={{ padding: 10,MarginLeft: 10 }}/></Divq>
                <TopRight>
                    <IconContainer><NotificationsNone /><IconBadge>2</IconBadge></IconContainer>
                    <IconContainer><Language /></IconContainer>
                    <IconContainer><Settings /></IconContainer>
                    <IconContainer><Avatar src={Person} alt='admin'></Avatar></IconContainer>
                    <IconContainer></IconContainer>
                </TopRight>
            </NavbarWrapper>
        </NavbarContainer>
     
    );
}

export default NavBar;