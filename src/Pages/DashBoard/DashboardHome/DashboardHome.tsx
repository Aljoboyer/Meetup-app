import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardHome = () => {
  return (
    <div className='dashboard_home'>
      <div className='dashboard_sidebar'>
        <Sidebar/>
      </div>
      <div className='outlets'>
        <Outlet/>
      </div>
    </div>
  );
}

export default DashboardHome;
