import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/linkedin-icon.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import avatar from '../../assets/AlexVyatkin.jpg';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={logo} alt='' />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='home' />
        <HeaderOption Icon={SuperVisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={avatar} title='Me' />
      </div>
    </div>
  );
}

export default Header;
