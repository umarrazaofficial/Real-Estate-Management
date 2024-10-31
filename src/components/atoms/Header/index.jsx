import React from 'react';
import { StyledHeader } from './Header.styles';
import ProfilePic from '../../../assets/profilePic.png';
import { CgMenuLeft } from 'react-icons/cg';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import { getCookie } from '../../../helpers/common';
const Header = () => {
  const name = getCookie('name');

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
          <span className="name">{name ? name : 'Amir Sohail'}</span>
        </div>
      </div>
      <div className="hamburger" onClick={showAside}>
        <CgMenuLeft size={25} color="var(--primary)" />
      </div>
    </StyledHeader>
  );
};

export default Header;
