import React from 'react'
import { Sidebar, Menu, MenuItem,useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Box, IconButton, useTheme} from "@mui/material"
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Nav, NavbarContainer, NavMenu, NavItem, NavbarWrapper, TopLeft, TopRight, IconContainer, IconBadge, Avatar, Logo, TopLeft1, Divq } from './NavBarElements';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import Person from '../../assets/images/avatar-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFileInvoice, faHome, faUsers, faExclamationTriangle, faLeaf } from '@fortawesome/free-solid-svg-icons';
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
                <Divq><FontAwesomeIcon icon={faBars} onClick={() => collapseSidebar()} style={{ padding: 10,MarginLef: 10 }}/></Divq>
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