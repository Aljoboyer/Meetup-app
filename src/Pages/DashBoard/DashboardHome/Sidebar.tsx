import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='side_route'>
      <h1><span>M</span>eet-Up</h1>
      <Link to="/"><p className='sidebar_text'>View User</p></Link>
      <Link to="/CreateData"><p className='sidebar_text'>Create User</p></Link>
    </div>
  );
}

export default Sidebar;
