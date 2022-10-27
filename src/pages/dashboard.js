import React from 'react';
import NavBar from '../components/Navbar';
import Xidebar from '../components/Sidebar/xidebar';
import Contents from './Contents';

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