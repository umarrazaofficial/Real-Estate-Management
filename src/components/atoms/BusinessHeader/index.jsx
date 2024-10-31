import React, { useCallback, useState } from 'react';
import { BusinessHeaderWrapper } from './BusinessHeader.style';
import Button from '../../molecules/Button';
import Field from '../Field';
import AddBusinessModal from '../AddBusinessModal';
import CenterModal from '../../molecules/Modal/CenterModal';
import SuccessModal from '../SuccessModal';
import { debounce } from '../../../helpers/common';
import SearchIcon from '../../../assets/searchIcon.svg';

const BusinessHeader = ({ setSearchQuery, heading, placeholder = 'Search property' }) => {
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
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

      <CenterModal width="666" title="Add New Property" open={modal} setOpen={setModal}>
        <AddBusinessModal handleSubmit={handleBusinessSubmit} />
      </CenterModal>

      <CenterModal width="580" open={successModal} setOpen={setSuccessModal}>
        <SuccessModal
          heading="Property Created Successfully!"
          para="Your property creation is successfully completed, now you can add expenses in it."
          btnText="Go Back!"
          btnClick={() => setSuccessModal(false)}
        />
      </CenterModal>

      {/* ------------------- Modal End ------------------- */}

      <BusinessHeaderWrapper>
        <div className="heading-wrap">
          <h2 className="heading">{heading}</h2>
        </div>
        <div className="filters">
          <div className="Search">
            <Field
              type="search"
              rounded
              lg
              name="search"
              placeholder={placeholder}
              prefix={<img src={SearchIcon} className="icon" alt="searchIcon" />}
              onChange={({ target: { value } }) => {
                debouncedSetSearchQuery(value);
              }}
            />
          </div>
          <Button variant="primary" width="145px" onClick={() => setModal(true)}>
            + Add Property
          </Button>
        </div>
      </BusinessHeaderWrapper>
    </>
  );
};

export default BusinessHeader;
