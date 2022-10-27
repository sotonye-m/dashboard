import React from 'react'
import { Sidebar, Menu, MenuItem,useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Labels } from './SidebarElements'
import { faFileInvoice, faHome, faUsers, faExclamationTriangle, faLeaf } from '@fortawesome/free-solid-svg-icons';
import GoogleAnalyticsIcon from 'mdi-react/GoogleAnalyticsIcon'
import AccountKeyIcon from 'mdi-react/AccountKeyIcon'
import FileDocumentIcon from 'mdi-react/FileDocumentBoxIcon'
import OrderBool from 'mdi-react/OrderBoolAscendingVariantIcon'
import HelpIcon from 'mdi-react/HelpIcon'
import CalendarIcon from 'mdi-react/CalendarIcon'
import CardIcon from 'mdi-react/CardIcon'
import bxTask from '@iconify/icons-bx/bx-task';
import bxUser from '@iconify/icons-bx/bx-user';
import bxChat from '@iconify/icons-bx/bx-chat'
import bxEnvelope from '@iconify/icons-bx/bx-envelope'
import bxError from '@iconify/icons-bx/bx-error'
import bxPhotoAlbum from '@iconify/icons-bx/bx-photo-album'
import bxsBarChart from '@iconify/icons-bx/bxs-bar-chart-alt-2'
import { Icon } from '@iconify/react/dist/offline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';



const SidebarContainerq = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    overflow: auto;
    top: 50px;
    font-size: 13px;
    backgroundColor: #0c2556;
    .Stick{

    }
`

const Labs = styled.p`
    color: #fff;
`

const Xidebar = () => {
    const { collapseSidebar } = useProSidebar();

  return (
    <div className='Stick' style={{ display: 'flex', color: '#acaeb0', fontSize:13, backgroundColor: '#0c2556' }}>
    <SidebarContainerq>
            <Sidebar transitionDuration={1000} backgroundColor={'#0c2556'} breakPoint={'Always'}>
          <Menu>
            <MenuItem icon={<FontAwesomeIcon icon={faHome} />}> <Labs> Dashboards</Labs></MenuItem>
            </Menu>
          
            <Menu>
            <MenuItem icon={' '}><Labels>MANAGEMENT</Labels></MenuItem>
                <SubMenu icon={<GoogleAnalyticsIcon  />} label={<label> Analytics</label>}>
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu> 
                <SubMenu icon={<AccountKeyIcon  />} label={<label>  Profile</label>}>
                    <MenuItem> Admin Profile </MenuItem>
                    <MenuItem> Customer Profile </MenuItem>
                </SubMenu>
            <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>  Team</MenuItem> 
            <MenuItem icon={<Icon icon={bxTask} />}> Task</MenuItem>
            <MenuItem icon={<Icon icon={bxUser} />}> Customers</MenuItem> 
            <MenuItem icon={<FileDocumentIcon />}> Products</MenuItem>  
            <MenuItem icon={<OrderBool />}> Orders</MenuItem>
            <SubMenu icon={<FontAwesomeIcon icon={faFileInvoice}  />} label={<label>  Invoices</label>}>
                    <MenuItem> Invoices </MenuItem>
                    <MenuItem> Printable </MenuItem>
            </SubMenu>
            <MenuItem icon={<Icon icon={bxEnvelope} />}> Email</MenuItem>
            <MenuItem icon={<Icon icon={bxChat} />}> Chat</MenuItem>
            </Menu>
            <Menu>
            <MenuItem icon={' '}><Labels>PAGES</Labels></MenuItem>
            <SubMenu icon={<AccountKeyIcon  />} label={<label>  Authentication</label>}>
                    <MenuItem> Sign in </MenuItem>
                    <MenuItem> Getting Started</MenuItem>
                    <MenuItem> Reset Password </MenuItem>
            </SubMenu>
            <SubMenu icon={<HelpIcon  />} label={<label>  Help Center</label>}>
                    <MenuItem> Contact </MenuItem>
                    <MenuItem> FAQs </MenuItem>
            </SubMenu>
            <MenuItem icon={<FontAwesomeIcon icon={faExclamationTriangle} />}> Maintenance</MenuItem>  
            <SubMenu icon={<Icon icon={bxError}  />} label={<label>  Error</label>}>
                    <MenuItem> 404 </MenuItem>
                    <MenuItem> 500 </MenuItem>
            </SubMenu> 
            <MenuItem icon={<CalendarIcon />}> Calendar</MenuItem> 
            </Menu>

            <Menu>
            <MenuItem><Labels>COMPONENTS</Labels></MenuItem>
            <SubMenu icon={<FontAwesomeIcon icon={faLeaf}  />} label={<label>  icons</label>}>
                    <MenuItem> Fontawesome </MenuItem>
                    <MenuItem> Materialdesign </MenuItem>
            </SubMenu>
            <MenuItem icon={<CardIcon />}> Cards</MenuItem>
            <MenuItem icon={<Icon icon={bxPhotoAlbum} />}> Gallery</MenuItem>
            <MenuItem icon={<Icon icon={bxsBarChart} />}> Charts</MenuItem>
          </Menu>
    </Sidebar>
    </SidebarContainerq>

  </div>
  )
}

export default Xidebar