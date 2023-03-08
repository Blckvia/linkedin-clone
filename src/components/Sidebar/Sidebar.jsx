import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3d&w=1000&q=80'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Alex Vyatkin</h2>
        <h4>Full stack developer</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        <div className='sidebar__recentItem'>
          <span className='sidebar__hash'>#</span>
          <p>reactjs</p>
        </div>
        <div className='sidebar__recentItem'>
          <span className='sidebar__hash'>#</span>
          <p>programming</p>
        </div>
        <div className='sidebar__recentItem'>
          <span className='sidebar__hash'>#</span>
          <p>softwareengineering</p>
        </div>
        <div className='sidebar__recentItem'>
          <span className='sidebar__hash'>#</span>
          <p>design</p>
        </div>
        <div className='sidebar__recentItem'>
          <span className='sidebar__hash'>#</span>
          <p>developer</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
