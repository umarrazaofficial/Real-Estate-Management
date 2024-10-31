import React from 'react';
import { StyledSideBar } from './SideBar.styles';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/aslogo.png';
import logout from '../../../assets/nav/logout1.svg';
import { NavData } from '../../Constant';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';

const SideBar = () => {
  // const navigate = useNavigate();
  const { onLogout } = useContextHook(AuthContext, v => ({
    onLogout: v.onLogout,
  }));

  return (
    <StyledSideBar>
      <div className="nav-wrapper">
        <div className="logoWrapper">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          {NavData?.map((elem, ind) => (
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
