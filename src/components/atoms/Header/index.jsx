import React, { useEffect, useRef, useState } from 'react';
import { StyledHeader } from './Header.styles';
import bell from '../../../assets/bell.svg';
import ProfilePic from '../../../assets/profilePic.jfif';
import Notifications from '../../molecules/Notifications';
import { CgMenuLeft } from 'react-icons/cg';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
const Header = () => {
  const [notifications, setNotifications] = useState(false);
  const NotificationRef = useRef(null);

  // const { user } = useContextHook(AuthContext, v => ({
  //   user: v.user,
  // }));

  const handleClickOutsideNotification = event => {
    if (NotificationRef.current && !NotificationRef.current.contains(event.target)) {
      setNotifications(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideNotification);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideNotification);
    };
  }, []);
  function showAside() {
    document.body.classList.toggle('aside-active');
    if (document.body.classList.contains('aside-active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  return (
    <StyledHeader>
      <div className="profile">
        <div className="pic">
          <img src={ProfilePic} alt="profilePic" />
        </div>
        <div className="body">
          <span className="greeting">Good Morning!</span>
          <span className="name">Pitter Walker</span>
        </div>
      </div>
      <div className="header-right-col">
        <div
          className="notificationWraaper"
          ref={NotificationRef}
          onClick={() => {
            setNotifications(!notifications);
          }}>
          <div className="bell">
            <img src={bell} alt="bell" />
          </div>
          <span className="notifcation-text">Notifications</span>
          {/* <img src={arrowDown} alt="arrowDown" /> */}
          <span className="count">3</span>

          <div className={notifications ? 'notificationWrapper-visible' : 'notificationWrapper'}>
            <Notifications />
          </div>
        </div>
        <div className="hamburger" onClick={showAside}>
          <CgMenuLeft size={25} color="var(--primary)" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
