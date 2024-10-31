import React, { useMemo, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ImSwitch } from 'react-icons/im';
import { MdOutlinePassword } from 'react-icons/md';
import { MenuButton } from '@szhsin/react-menu';
import { useContextHook } from 'use-context-hook';
import { format } from 'date-fns';
import TableLayout from '../components/molecules/TableLayout';
// import Select from '../components/molecules/Select';
import Button from '../components/molecules/Button';
import Table from '../components/molecules/Table';
import { AdminTableWrapper, MenuItems, MenuMain } from '../components/atoms/AdminTable/AdminTable.style';
import CenterModal from '../components/molecules/Modal/CenterModal';
import DeleteModal from '../components/atoms/DeleteModal';
import SuccessModal from '../components/atoms/SuccessModal';
import adminService from '../services/adminService';
// import { AuthContext } from '../Context/authContext';
import Toast from '../components/molecules/Toast';
// import { getDateObject } from '../helpers/common';
// import AddAdminModal from '../components/atoms/AddAdminModal';
import AddMerchantModal from '../components/atoms/AddMerchant';
import EditIcon from '../assets/editIcon.svg';
import DeleteIcon from '../assets/deleteIcon.svg';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/authContext';
import expenseService from '../services/expenseService';
import { getDateObject } from '../helpers/common';

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
const Expenses = () => {
  const { _id } = useParams();
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    startDate: '',
    endDate: '',
    filterRoles: '',
    propertyId: _id,
  });

  const { refetch, fetch } = useContextHook(AuthContext, ['refetch', 'fetch']);

  const { expenses_data, expenses_loading } = expenseService.GetExpenses(searchQuery, fetch);

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
  const onDeleteExpense = async id => {
    try {
      await expenseService.deleteExpense(id);
      refetch();
    } catch (ex) {
      Toast({
        type: 'error',
        message: ex?.message,
      });
    }
  };
  const handleDeleteAdminModal = () => {
    onDeleteExpense(updateAdmin._id);
    setDeleteAdminModal(false);
    setDeleteAdminSuccessModal(true);
  };

  const handleForcedLogoutModal = async () => {
    setForcedLogoutModal(false);
    // onLogout(updateAdmin._id);
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
        <MenuItems
          onClick={() => {
            setEditAdminModal(true);
            setUpdateAdmin(_);
          }}>
          <img src={EditIcon} alt="EditIcon" /> Edit Expense
        </MenuItems>
        <MenuItems
          onClick={() => {
            setDeleteAdminModal(true);
            setUpdateAdmin(_);
          }}>
          <img src={DeleteIcon} alt="DeleteIcon" /> Delete Expense
        </MenuItems>
      </MenuMain>
    </div>
  );

  const { totalCount, totalAmount, admins_rows } = useMemo(
    () => ({
      admins_rows: expenses_data?.data?.map(_ => [
        format(getDateObject(_?.createdAt), 'yyyy-MM-dd'),
        _?.title ?? '------------',
        _?.paidTo ?? '------------',
        _?.amount ?? '------------',
        actionBtn(_),
      ]),
      totalCount: expenses_data.totalItems,
      totalAmount: expenses_data.totalAmount,
    }),
    [expenses_data],
  );
  const columnNamess = [`Created at`, `Expense Title`, `Paid To`, `Amount (rs)`, `Action`];

  return (
    <>
      {/* ------------------  Modal  ---------------- */}

      <CenterModal open={deleteAdminModal} setOpen={setDeleteAdminModal} width="580">
        <DeleteModal
          heading="Delete Expense"
          para="Are you sure you want to delete this expense? The data will be lost."
          btnText="Yes, Delete"
          btnClick={handleDeleteAdminModal}
        />
      </CenterModal>

      <CenterModal open={deleteAdminSuccessModal} setOpen={setDeleteAdminSuccessModal} iscloseAble={false} width="580">
        <SuccessModal
          heading="Expense Deleted Successfully"
          btnText="Go Back"
          btnClick={() => {
            setDeleteAdminSuccessModal(false);
          }}
        />
      </CenterModal>

      <CenterModal open={forcedLogoutModal} setOpen={setForcedLogoutModal} width="580">
        <DeleteModal
          heading="Forced Logout"
          para="Are you sure you want to forced logout this merchant? all the data will be lost."
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
          heading="Merchant Forced Logout Successfully"
          btnText="Go Back"
          btnClick={() => {
            setForcedLogoutSuccessModal(false);
            // refetch();
          }}
        />
      </CenterModal>

      {/* <CenterModal open={updatePasswordModal} setOpen={setUpdatePasswordModal} title="Update Password" width="666">
        <AddAdminModal
          onSubmit={handleUpdatePassword}
          data={updateAdmin}
          setData={setUpdateAdmin}
          onlyPassword
          btnText={'Update Password'}
        />
      </CenterModal> */}

      <CenterModal open={editAdminModal} setOpen={setEditAdminModal} title="Edit Expense" width="666">
        <AddMerchantModal
          onSubmit={() => setEditAdminModal(false)}
          data={updateAdmin}
          setData={setUpdateAdmin}
          btnText="Save Changes"
        />
      </CenterModal>

      <CenterModal open={addAdminModal} setOpen={setAddAdminModal} title="Add New Expense" width="666">
        <AddMerchantModal onSubmit={handleAddAdmin} btnText={'Add Expense'} propertyId={_id} />
      </CenterModal>

      <CenterModal open={addAdminSuccessModal} setOpen={setAddAdminSuccessModal} iscloseAble={false} width="580">
        <SuccessModal
          heading="Expense Added Successfully"
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
          tableHeading={
            <div className="total-amount">
              Expenses
              <span>( Total Amount: Rs. {totalAmount} )</span>
            </div>
          }
          placeholder="Search expenses"
          setSearchText={setSearchQuery}
          // content={
          //   <Select
          //     placeholder="All"
          //     width="140px"
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
              + Add Expense
            </Button>
          }>
          <Table width={1024} rowsData={admins_rows} columnNames={columnNamess} noPadding loading={expenses_loading} />
        </TableLayout>
      </AdminTableWrapper>
    </>
  );
};

export default Expenses;
