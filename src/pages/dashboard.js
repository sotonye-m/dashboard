import { display } from '@mui/system';
import React from 'react';
import NavBar from '../components/Navbar';
import ToggleSidebar from '../components/Sidebar';
import Xidebar from '../components/Sidebar/xidebar';
import Contents from './Contents';
import { Container } from './dashboardElements';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Xidebar />
        <Contents />
      </div>    
    </>
  )
}

export default Dashboard