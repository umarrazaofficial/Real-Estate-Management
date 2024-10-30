import React, { useState } from 'react';
import StoreWhite from '../../../assets/StoreImg.svg';
import Button from '../../molecules/Button';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CenterModal from '../../molecules/Modal/CenterModal';
import SuccessModal from '../SuccessModal';
import { AllBusinessSectionWrapper, BusinessWrap } from './AllBusinessSection.style';
import { useNavigate } from 'react-router-dom';
import businessService from '../../../services/businessService';
import EditIcon from '../../../assets/editIcon.svg';
import DeleteIcon from '../../../assets/deleteIcon.svg';
import DetailIcon from '../../../assets/detailIcon.svg';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import Toast from '../../molecules/Toast';
import AddBusinessModal from '../AddBusinessModal';
import Pagination from '../../molecules/Pagination';
import { NoRecordFound } from '../../molecules/Table/Table.styles';
import Loaders from '../Loaders';
import MenuButton, { MenuItem } from '../Menu';
import ModalContainer from '../../molecules/ModalContainer';
import BussniessDetails from '../BussniessDetails';
import Captcha from '../CaptchaComponent';
import DeleteModal from '../DeleteModal';

export const StoresList = [
  {
    name: 'Canadian Outdoor Store',
    stores: 6,
  },
  {
    name: 'Canadian Outdoor Store',
    stores: 3,
  },
  {
    name: 'Canadian Outdoor Store',
    stores: 7,
  },
  {
    name: 'Canadian Outdoor Store',
    stores: 2,
  },
  {
    name: 'Canadian Outdoor Store',
    stores: 5,
  },
];

const AllBusinessSection = ({ searchQuery, currentPage = 1, pageSize = 10, totalCount = 0, onChangeFilters }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteSuccessModal, setDeleteSuccessModal] = useState(false);
  const [businessData, setBusinessData] = useState(null);
  // const [filterState, setFilterState] = useState('');

  // const { hasPermission } = useContextHook(AuthContext, ['hasPermission']);

  const { fetch, refetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
    refetch: v.refetch,
  }));
  const { businesses_data, businesses_loading } = businessService.GetBusinesses(searchQuery, fetch);

  const navigate = useNavigate();
  const handelDeactivateBusiness = async (id, onClose) => {
    try {
      const { message } = await businessService.deleteBusiness(id);
      Toast({
        type: 'success',
        message,
      });
      refetch();
      onClose();
      setDeleteSuccessModal(true);
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
    }
  };
  // console.log(hasPermission('business.edit-business'));
  return (
    <>
      {/* ------------------- Modal Start ------------------- */}

      {/* ------------------- Delete Modal Start ------------------- */}

      <CenterModal open={deleteSuccessModal} setOpen={setDeleteSuccessModal} iscloseAble={false} width="580">
        <SuccessModal
          heading="Business Deactivated Successfully"
          btnText="Go Back"
          btnClick={() => setDeleteSuccessModal(false)}
        />
      </CenterModal>

      {/* ------------------- Delete Modal End ------------------- */}

      {/* ------------------- Edit Modal Start ------------------- */}

      <CenterModal open={editModal} setOpen={setEditModal} width="666" title="Edit Business">
        <AddBusinessModal businessData={businessData} handleSubmit={() => setEditModal(false)} />
      </CenterModal>

      {/* ------------------- Edit Modal End ------------------- */}

      {/* ------------------- Modal End ------------------- */}
      {businesses_loading ? (
        <Loaders viewLoader />
      ) : (
        <AllBusinessSectionWrapper>
          {businesses_data?.totalItems > 0 ? (
            businesses_data?.businesses?.map((data, index) => (
              <div key={index} className="content-wrap">
                <BusinessWrap>
                  <div className="icon">
                    <img src={StoreWhite} alt="store" />
                  </div>
                  <div>
                    <h2 className="title">{data?.name}</h2>
                    <span className="desc">{data?.salesChannels?.length || 0} channels</span>
                  </div>
                </BusinessWrap>
                <div className="btns-wrap">
                  <Button
                    // width="130px"
                    sm
                    variant={data?.status === 'Deactivated' ? 'white' : 'light-primary'}
                    disabled={data?.status === 'Deactivated' && true}
                    onClick={() => {
                      navigate(`/business/business-store/${data?.id}`);
                    }}>
                    See channels
                  </Button>
                </div>
                <div className="dots">
                  <div className="action-btn">
                    <MenuButton transition icon={<BsThreeDotsVertical size={20} color="#9D9D9D" />}>
                      {/* {data?.status === 'Active' && (
                        <> */}
                      {/* {hasPermission('business.edit-business') && ( */}
                      <ModalContainer
                        width="777"
                        title={'Edit Business'}
                        btnComponent={({ onClick }) => (
                          <MenuItem onClick={onClick}>
                            <img src={EditIcon} alt="EditIcon" /> Edit Business
                          </MenuItem>
                        )}
                        content={({ onClose }) => <AddBusinessModal businessData={data} handleSubmit={onClose} />}
                      />
                      {/* )} */}
                      {/* {hasPermission('business.delete-business') && ( */}
                      <ModalContainer
                        width="580"
                        btnComponent={({ onClick }) => (
                          <MenuItem onClick={onClick}>
                            <img src={DeleteIcon} alt="DeleteIcon" /> Deactivate Business
                          </MenuItem>
                        )}
                        content={({ onClose }) => (
                          <DeleteModal
                            heading={'Deactivate Business'}
                            para="Are you sure you want to deactivate this business?"
                            btnText="Yes, Deactivate"
                            btnClick={() => {
                              handelDeactivateBusiness(data?.id, onClose);
                            }}
                          />
                        )}
                      />
                      {/* )} */}
                      {/* </>
                      )} */}
                      {/* {hasPermission('business.get-business-details') && ( */}
                      <ModalContainer
                        width="777"
                        title="Business Details"
                        btnComponent={({ onClick }) => (
                          <MenuItem onClick={onClick}>
                            <img src={DetailIcon} alt="DetailIcon" /> Business Details
                          </MenuItem>
                        )}
                        content={({ onClose }) => <BussniessDetails bussinessId={data?.id} />}
                      />
                      {/* )} */}
                    </MenuButton>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <NoRecordFound>No Record Found</NoRecordFound>
          )}
          {/* <div className="pagination">
            {businesses_data?.totalItems > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={businesses_data?.totalItems}
                pageSize={pageSize}
                onPageChange={_ => onChangeFilters({ filter: filterState.filter, page: _ })}
              />
            ) : (
              ''
            )}
          </div> */}
        </AllBusinessSectionWrapper>
      )}
    </>
  );
};

export default AllBusinessSection;
