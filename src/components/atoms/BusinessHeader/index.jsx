import React, { useCallback, useContext, useState } from 'react';
import { BusinessHeaderWrapper } from './BusinessHeader.style';
import Button from '../../molecules/Button';
import Field from '../Field';
// import Select from '../../molecules/Select';
import AddBusinessModal from '../AddBusinessModal';
import CenterModal from '../../molecules/Modal/CenterModal';
import SuccessModal from '../SuccessModal';
import { debounce } from '../../../helpers/common';
import SearchIcon from '../../../assets/searchIcon.svg';
import { useNavigate } from 'react-router-dom';
// import { useContextHook } from 'use-context-hook';
// import { AuthContext } from '../../../Context/authContext';

const BusinessHeader = ({ setSearchQuery, heading, placeholder = 'Search business' }) => {
  // const { hasPermission } = useContextHook(AuthContext, ['hasPermission']);
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const navigate = useNavigate();
  const handleBusinessSubmit = e => {
    setSuccessModal(true);
    setModal(false);
  };
  const debouncedSetSearchQuery = useCallback(
    debounce(query => {
      setSearchQuery(_ => ({ ..._, searchText: query }));
    }, 200),
    [],
  );
  return (
    <>
      {/* ------------------- Modal Start ------------------- */}

      <CenterModal width="666" title="Add New Business" open={modal} setOpen={setModal}>
        <AddBusinessModal handleSubmit={handleBusinessSubmit} />
      </CenterModal>

      <CenterModal width="580" open={successModal} setOpen={setSuccessModal}>
        <SuccessModal
          heading="Business Created Successfully"
          para="your business creation is successfully completed, now you can create multiple stores in it."
          btnText="Go Back!"
          btnClick={() => setSuccessModal(false)}
        />
      </CenterModal>

      {/* ------------------- Modal End ------------------- */}

      <BusinessHeaderWrapper>
        <div className="heading-wrap">
          <h2 className="heading">{heading ? heading : 'My business'}</h2>
        </div>
        <div className="filters">
          <div className="Search">
            <Field
              type="search"
              rounded
              lg
              name="search"
              placeholder={placeholder}
              prefix={<img src={SearchIcon} alt="SearchIcon" />}
              onChange={({ target: { value } }) => {
                debouncedSetSearchQuery(value);
              }}
            />
          </div>
          {/* {hasPermission('business.create-business') && ( */}
          {/* {admin && ( */}
          <Button width="180px" onClick={() => navigate('/business/business-requests')}>
            Businesses requests
          </Button>
          {/* )} */}
          {/* )} */}
        </div>
      </BusinessHeaderWrapper>
    </>
  );
};

export default BusinessHeader;
