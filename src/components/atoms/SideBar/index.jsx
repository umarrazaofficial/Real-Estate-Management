import React, { useContext, useEffect, useState } from 'react';
import { StyledSideBar } from './SideBar.styles';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/insifrLogo.svg';
import logout from '../../../assets/nav/logout.svg';
import { NavData } from '../../Constant';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';

const SideBar = () => {
  const navigate = useNavigate();
  const { onLogout, allowedPages } = useContextHook(AuthContext, v => ({
    onLogout: v.onLogout,
    allowedPages: v.allowedPages,
  }));
  const data = NavData?.filter(element => allowedPages?.includes(element?.file));

  return (
    <StyledSideBar>
      <div className="nav-wrapper">
        <div className="logoWrapper">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          {data?.map((elem, ind) => (
            <li key={ind}>
              <NavLink to={`/${elem.path}`}>
                <img src={elem.img} alt={elem.path} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onLogout}>
        <img src={logout} alt="logout" />
      </button>
    </StyledSideBar>
  );
};

export default SideBar;
