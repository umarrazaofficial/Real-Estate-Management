import React, { useMemo, useState } from 'react';
import TableLayout from '../../molecules/TableLayout';
import Button from '../../molecules/Button';
import Table from '../../molecules/Table';
import Select from '../../molecules/Select';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AdminTableWrapper, MenuItems, MenuMain } from './AdminTable.style';
import { ImSwitch } from 'react-icons/im';
import { MdOutlinePassword } from 'react-icons/md';
import { MenuButton } from '@szhsin/react-menu';
import CenterModal from '../../molecules/Modal/CenterModal';
import DeleteModal from '../DeleteModal';
import SuccessModal from '../SuccessModal';
import AddAdminModal from '../AddAdminModal';
import adminService from '../../../services/adminService';
import EditIcon from '../../../assets/editIcon.svg';
import DeleteIcon from '../../../assets/deleteIcon.svg';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import { format } from 'date-fns';
import { getDateObject } from '../../../helpers/common';
import Toast from '../../molecules/Toast';

const products_data = [
  {
    createdAt: '2024 - 07 - 28',
    email: 'adil123@gmail.com',
    roles: 'INSIFR_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'johnduo@gmail.com',
    roles: 'SUPER_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'adil123@gmail.com',
    roles: 'INSIFR_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'johnduo@gmail.com',
    roles: 'DEVELOPER_SUPER_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'adil123@gmail.com',
    roles: 'INSIFR_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'johnduo@gmail.com',
    roles: 'SUPER_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'johnduo@gmail.com',
    roles: 'DEVELOPER_SUPER_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'adil123@gmail.com',
    roles: 'INSIFR_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'adil123@gmail.com',
    roles: 'INSIFR_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'johnduo@gmail.com',
    roles: 'SUPER_ADMIN',
  },
  {
    createdAt: '2024 - 07 - 28',
    email: 'adil123@gmail.com',
    roles: 'INSIFR_ADMIN',
  },
];
export const FilterOptions = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'super_admin',
    label: 'Super_Admin',
  },
];
const AdminTable = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    startDate: '',
    endDate: '',
    filterRoles: '',
  });

  const { refetch, hasPermission, fetch } = useContextHook(AuthContext, ['refetch', 'hasPermission', 'fetch']);

  const { admins_data, admins_loading } = adminService.GetAdmins(searchQuery, fetch);

  const [deleteAdminModal, setDeleteAdminModal] = useState(false);
  const [deleteAdminSuccessModal, setDeleteAdminSuccessModal] = useState(false);
  const [forcedLogoutModal, setForcedLogoutModal] = useState(false);
  const [forcedLogoutSuccessModal, setForcedLogoutSuccessModal] = useState(false);
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const [editAdminModal, setEditAdminModal] = useState(false);
  const [addAdminModal, setAddAdminModal] = useState(false);
  const [addAdminSuccessModal, setAddAdminSuccessModal] = useState(false);
  const [updateAdmin, setUpdateAdmin] = useState({});

  const onLogout = async id => {
    try {
      await adminService.foreLogoutUser(id);
      Toast({
        message: 'Admin logged out successfully',
        type: 'success',
      });
    } catch (ex) {
      Toast({
        type: 'error',
        message: ex?.message,
      });
    }
  };
  const onDeleteAdmin = async id => {
    try {
      await adminService.deleteAdmin(id);
      refetch();
      Toast({
        message: 'Admin deleted successfully',
        type: 'success',
      });
    } catch (ex) {
      Toast({
        type: 'error',
        message: ex?.message,
      });
    }
  };
  const handleDeleteAdminModal = () => {
    onDeleteAdmin(updateAdmin.id);
    setDeleteAdminModal(false);
    setDeleteAdminSuccessModal(true);
  };

  const handleForcedLogoutModal = async () => {
    setForcedLogoutModal(false);
    onLogout(updateAdmin.id);
    setForcedLogoutSuccessModal(true);
  };

  const handleUpdatePassword = () => {
    setUpdatePasswordModal(false);
  };

  const handleAddAdmin = () => {
    setAddAdminModal(false);
    setAddAdminSuccessModal(true);
  };

  const actionBtn = _ => (
    <div className="action-btn-dropdown">
      <MenuMain
        menuButton={
          <MenuButton>
            <BsThreeDotsVertical size={20} color="#9D9D9D" />
          </MenuButton>
        }
        transition>
        {/* {hasPermission('admins.edit') && ( */}
        <MenuItems
          onClick={() => {
            setEditAdminModal(true);
            setUpdateAdmin(_);
          }}>
          <img src={EditIcon} alt="EditIcon" /> Edit Admin
        </MenuItems>
        {/* )}
        {hasPermission('admins.updatepassword') && ( */}
        <MenuItems
          onClick={() => {
            setUpdatePasswordModal(true);
            setUpdateAdmin(_);
          }}>
          <MdOutlinePassword /> Update Password
        </MenuItems>
        {/* )}
        {hasPermission('admins.delete') && ( */}
        <MenuItems
          onClick={() => {
            setDeleteAdminModal(true);
            setUpdateAdmin(_);
          }}>
          <img src={DeleteIcon} alt="DeleteIcon" /> Delete Admin
        </MenuItems>
        {/* )}
        {hasPermission('admins.forcelogout') && ( */}
        <MenuItems
          onClick={() => {
            setForcedLogoutModal(true);
            setUpdateAdmin(_);
          }}>
          <ImSwitch /> Forced Logout
        </MenuItems>
        {/* )} */}
      </MenuMain>
    </div>
  );

  const { totalCount, admins_rows } = useMemo(
    () => ({
      admins_rows: admins_data?.admins?.map(_ => [
        format(getDateObject(_.created_at), 'yyyy-MM-dd'),
        // _?.createdAt || '------------',
        _?.email || '------------',
        // _?.roles || '------------',
        _.roles?.length > 0 ? _.roles.map(__ => __.type).join(', ') : '------------',
        actionBtn(_),
      ]),
      totalCount: admins_data?.totalItems,
    }),
    [admins_data],
  );
  const columnNamess = [`Create at`, `Email Address`, `Roles`, `Action`];
  const { roles_data } = adminService.GetRoles(searchQuery, fetch);

  const rolesOptions = useMemo(
    () => [
      {
        label: 'All',
        value: '',
      },
      ...roles_data?.roles.map(({ type }) => ({
        label: type,
        value: type,
      })),
    ],
    [roles_data],
  );
  return (
    <>
      {/* ------------------  Modal  ---------------- */}

      <CenterModal open={deleteAdminModal} setOpen={setDeleteAdminModal} width="580">
        <DeleteModal
          heading="Delete Admin"
          para="Are you sure you want to delete this admin? all the data will be lost."
          btnText="Yes, Delete"
          btnClick={handleDeleteAdminModal}
        />
      </CenterModal>

      <CenterModal open={deleteAdminSuccessModal} setOpen={setDeleteAdminSuccessModal} iscloseAble={false} width="580">
        <SuccessModal
          heading="Admin Deleted Successfully"
          btnText="Go Back"
          btnClick={() => {
            setDeleteAdminSuccessModal(false);
          }}
        />
      </CenterModal>

      <CenterModal open={forcedLogoutModal} setOpen={setForcedLogoutModal} width="580">
        <DeleteModal
          heading="Forced Logout"
          para="Are you sure you want to forced logout this admin? all the data will be lost."
          btnText="Yes, Logout"
          btnClick={() => {
            handleForcedLogoutModal();
            // refetch();
          }}
        />
      </CenterModal>

      <CenterModal
        open={forcedLogoutSuccessModal}
        setOpen={setForcedLogoutSuccessModal}
        iscloseAble={false}
        width="580">
        <SuccessModal
          heading="Admin Forced Logout Successfully"
          btnText="Go Back"
          btnClick={() => {
            setForcedLogoutSuccessModal(false);
            // refetch();
          }}
        />
      </CenterModal>

      <CenterModal open={updatePasswordModal} setOpen={setUpdatePasswordModal} title="Update Password" width="666">
        <AddAdminModal
          onSubmit={handleUpdatePassword}
          data={updateAdmin}
          setData={setUpdateAdmin}
          onlyPassword
          btnText={'Update Password'}
        />
      </CenterModal>

      <CenterModal open={editAdminModal} setOpen={setEditAdminModal} title="Edit Admin" width="666">
        <AddAdminModal
          onSubmit={() => setEditAdminModal(false)}
          data={updateAdmin}
          setData={setUpdateAdmin}
          btnText={'Update Admin'}
        />
      </CenterModal>

      <CenterModal open={addAdminModal} setOpen={setAddAdminModal} title="Add New Admin" width="666">
        <AddAdminModal onSubmit={handleAddAdmin} btnText={'Add Admin'} />
      </CenterModal>

      <CenterModal open={addAdminSuccessModal} setOpen={setAddAdminSuccessModal} iscloseAble={false} width="580">
        <SuccessModal
          heading="Admin Added Successfully"
          btnText="Go Back"
          btnClick={() => setAddAdminSuccessModal(false)}
        />
      </CenterModal>

      {/* ------------------  Modal  ---------------- */}

      <AdminTableWrapper>
        <TableLayout
          onChangeFilters={filters => {
            setSearchQuery(_ => ({
              ..._,
              // searchText: filters,
              ...filters,
            }));
          }}
          innerBorder
          currentPage={searchQuery.page}
          pageSize={searchQuery.pageSize}
          totalCount={totalCount}
          tableHeading="Admins"
          placeholder="Search Admins"
          setSearchText={setSearchQuery}
          // content={
          //   <Select
          //     inputSm
          //     className="filter"
          //     placeholder="All"
          //     noMargin
          //     options={rolesOptions}
          //     onChange={e =>
          //       setSearchQuery(prev => ({
          //         ...prev,
          //         filterRoles: e?.target?.value?.value,
          //       }))
          //     }
          //   />
          // }
          btnText={
            <Button sm onClick={() => setAddAdminModal(true)}>
              + Add Admin
            </Button>
          }>
          <Table width={1024} rowsData={admins_rows} loading={admins_loading} columnNames={columnNamess} noPadding />
        </TableLayout>
      </AdminTableWrapper>
    </>
  );
};

export default AdminTable;
