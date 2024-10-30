import dashboard from '../../src/assets/nav/dashboard.svg';
import bussiness from '../../src/assets/nav/bussiness.svg';
// import configurations from '../../src/assets/nav/configurations.svg';
import admin from '../../src/assets/nav/admin.svg';
import permission from '../../src/assets/nav/permission.svg';
import role from '../../src/assets/nav/role.svg';
import report from '../../src/assets/nav/reports.svg';
import addBusinessUser from '../../src/assets/nav/addBusinessUser.svg';
import Settings from '../../src/assets/nav/Settings.svg';

export const NavData = [
  {
    path: 'dashboard',
    file: 'dashboard',
    img: dashboard,
  },
  {
    path: 'business',
    file: 'business',
    img: bussiness,
  },
  {
    path: 'admins',
    file: 'admins',
    img: admin,
  },
  {
    path: 'reports',
    file: 'reports',
    img: report,
  },
  {
    path: 'permissions',
    file: 'permissions',
    img: permission,
  },
  {
    path: 'roles',
    file: 'roles',
    img: role,
  },
  {
    path: 'business-user',
    file: 'add-business-user',
    img: addBusinessUser,
  },
  {
    path: 'settings',
    file: 'settings',
    img: Settings,
  },
];
